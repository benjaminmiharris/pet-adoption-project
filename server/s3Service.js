// const { S3 } = require("aws-sdk");
// const uuid = require("uuid").v4;

// exports.s3Uploadsv2 = async (file) => {
//   const s3 = new S3();

//   const param = {
//     Bucket: process.env.BUCKET_NAME,
//     Key: `uploads/${uuid()}-${file.originalname}`,
//     Body: file.buffer,
//   };

//   return s3.upload(param);
// };
