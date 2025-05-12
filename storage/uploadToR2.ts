// utils/uploadToR2.ts
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const {
  R2_ACCESS_KEY_ID,
  R2_ENDPOINT,
  R2_SECRET_ACCESS_KEY,
  R2_BUCKET,
} = process.env;

const r2Client = new S3Client({
  region: 'auto',
  endpoint: R2_ENDPOINT!,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID!,
    secretAccessKey: R2_SECRET_ACCESS_KEY!,
  },
});

/**
 * Uploads a file to Cloudflare R2.
 * 
 * @param key - Path in bucket, e.g., "locales/en.json"
 * @param body - File content (string or Buffer)
 */
export async function uploadToR2(key: string, body: string | Buffer) {
  try {
    const command = new PutObjectCommand({
      Bucket: R2_BUCKET!,
      Key: key,
      Body: body,
      ContentType: "application/json",
    });

    await r2Client.send(command);
    console.log(`Successfully uploaded ${key} to R2.`);
  } catch (error) {
    console.error("Error uploading to R2:", error);
    throw error;
  }
}
