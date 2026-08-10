import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

import sharp from "sharp";

const s3 = new S3Client({
  region: "ap-south-1",
});

const ORIGINAL_BUCKET = process.env.ORIGINAL_BUCKET;
const PROCESSED_BUCKET = process.env.PROCESSED_BUCKET;

export const processImage = async (event) => {
  console.log("Event received:", JSON.stringify(event, null, 2));

  const record = event.Records[0];

  const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));

  console.log("Processing:", key);

  const image = await s3.send(
    new GetObjectCommand({
      Bucket: ORIGINAL_BUCKET,
      Key: key,
    }),
  );

  const buffer = await streamToBuffer(image.Body);

  const processedBuffer = await sharp(buffer)
    .resize({
      width: 1200,
      withoutEnlargement: true,
    })
    .jpeg({
      quality: 70,
    })
    .toBuffer();

  const outputKey = `processed/${key}`;

  await s3.send(
    new PutObjectCommand({
      Bucket: PROCESSED_BUCKET,
      Key: outputKey,
      Body: processedBuffer,
      ContentType: "image/jpeg",
    }),
  );

  console.log("Uploaded:", outputKey);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Image processed successfully",
      outputKey,
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
