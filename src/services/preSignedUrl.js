import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const generatePresignedUrlGET = async (bucketName, key) => {
  const s3Client = new S3Client({
    region: process.env.REACT_APP_AWS_REGION,
    credentials: {
      accessKeyId: process.env.REACT_APP_AWS_S3_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_AWS_S3_SECRET_KEY,
    },
  });

  const params = {
    Bucket: bucketName,
    Key: key,
    Expires: 3600,
  };

  try {
    const command = new GetObjectCommand(params);
    const signedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 3600,
    });
    return signedUrl;
  } catch (err) {
    console.error("Error generating pre-signed GET URL:", err);
    throw err;
  }
};

const generatePresignedUrlPUT = async (bucketName, key, contentType) => {
  const s3Client = new S3Client({
    region: process.env.REACT_APP_AWS_REGION,
    credentials: {
      accessKeyId: process.env.REACT_APP_AWS_S3_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_AWS_S3_SECRET_KEY,
    },
  });

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    ContentType: contentType,
  });

  try {
    const response = await getSignedUrl(s3Client, command, {
      expiresIn: 3600,
    });
    return response;
  } catch (err) {
    console.error("Error generating PUT pre-signed URL:", err);
    throw err;
  }
};

export { generatePresignedUrlGET, generatePresignedUrlPUT };
