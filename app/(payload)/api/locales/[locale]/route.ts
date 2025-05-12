// src/app/api/locales/[locale]/route.ts
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";
const { R2_ACCESS_KEY_ID, R2_ENDPOINT, R2_SECRET_ACCESS_KEY, R2_BUCKET } =
  process.env;

export async function GET(
  req: NextRequest,
  { params }: { params: { locale: string } }
) {
  const { locale } = await params;
  const url = `${R2_ENDPOINT}/${R2_BUCKET}/locales/${locale}.json`;

  const r2Client = new S3Client({
    region: "auto",
    endpoint: R2_ENDPOINT!,
    credentials: {
      accessKeyId: R2_ACCESS_KEY_ID!,
      secretAccessKey: R2_SECRET_ACCESS_KEY!,
    },
  });

  const command = new GetObjectCommand({
    Bucket: R2_BUCKET!,
    Key: `locales/${locale}.json`,
  });

  const response = await r2Client.send(command);

  const data = await response.Body?.transformToString();

  if (!data) {
    return NextResponse.json({ error: "Locale not found" }, { status: 404 });
  }

  return NextResponse.json(JSON.parse(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
