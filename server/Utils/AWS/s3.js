import dotenv from "dotenv";
dotenv.config({
  path: require("path").resolve(__dirname, "../.env"),
});

import AWS from "aws-sdk";

// AWS s3 bucket config
 const s3Bucket = new AWS.S3({
  accessKeyId: "AKIAZ677NUY2TI5FZL64",
  secretAccessKey: "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",
  region: "ap-south-1",
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject) =>
    s3Bucket.upload(options, (error, data) => {
      if (error) return reject(error);
      return resolve(data);
    })
  );
};