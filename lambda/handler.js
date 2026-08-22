import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

import { processImage } from "./imageProcessor.js";

const s3 = new S3Client({
  region: "ap-south-1",
});

const ORIGINAL_BUCKET = process.env.ORIGINAL_BUCKET;
const PROCESSED_BUCKET = process.env.PROCESSED_BUCKET;

export const processImageHandler = async (event) => {
  console.log("Event received:", JSON.stringify(event, null, 2));

  const record = event.Records[0];

  const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));

  console.log("Processing:", key);

  /*
    Expected:
    uploads/{jobId}-{filename}
  */

  const fileName = key.split("/").pop();

  const jobId = fileName.split("-")[0];

  const image = await s3.send(
    new GetObjectCommand({
      Bucket: ORIGINAL_BUCKET,
      Key: key,
    }),
  );

  const buffer = await streamToBuffer(image.Body);

  const { processedBuffer, thumbnailBuffer } = await processImage(buffer);

  const processedKey = `processed/${fileName}`;

  const thumbnailKey = `thumbnails/${fileName}`;

  await s3.send(
    new PutObjectCommand({
      Bucket: PROCESSED_BUCKET,
      Key: processedKey,
      Body: processedBuffer,
      ContentType: "image/jpeg",
    }),
  );

  await s3.send(
    new PutObjectCommand({
      Bucket: PROCESSED_BUCKET,
      Key: thumbnailKey,
      Body: thumbnailBuffer,
      ContentType: "image/jpeg",
    }),
  );

  console.log("Uploaded processed:", processedKey);

  console.log("Uploaded thumbnail:", thumbnailKey);

  if (process.env.BACKEND_URL && process.env.LAMBDA_SECRET) {
    await fetch(`${process.env.BACKEND_URL}/api/v1/jobs/${jobId}/complete`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "x-lambda-secret": process.env.LAMBDA_SECRET,
      },

      body: JSON.stringify({
        processedKey,

        thumbnailKey,

        processedSize: processedBuffer.length,

        thumbnailSize: thumbnailBuffer.length,
      }),
    });
  }

  return {
    statusCode: 200,

    body: JSON.stringify({
      message: "Image processed successfully",

      processedKey,

      thumbnailKey,
    }),
  };
};

const streamToBuffer = async (stream) => {
  const chunks = [];

  for await (const chunk of stream) {
    chunks.push(chunk);
  }

  return Buffer.concat(chunks);
};
