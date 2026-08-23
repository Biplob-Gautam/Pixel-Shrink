import {
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "../config/aws.config.js";

// Generates temporary permission for frontend to upload directly into S3
export const generateUploadUrl = async ({ key, contentType }) => {
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_ORIGINAL_BUCKET,
    Key: key,
    ContentType: contentType,
  });

  const uploadUrl = await getSignedUrl(s3Client, command, {
    expiresIn: 300,
  });

  return uploadUrl;
};
// Generates temporary permission for frontend download/view image
export const generateDownloadUrl = async ({ key, bucket }) => {
  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: key,
  });

  return await getSignedUrl(s3Client, command, {
    expiresIn: 3600,
  });
};
// Delete s3 objects
export const deleteS3Object = async ({ key, bucket }) => {
  const command = new DeleteObjectCommand({
    Bucket: bucket,

    Key: key,
  });

  await s3Client.send(command);
};
