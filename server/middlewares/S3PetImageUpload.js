const AWS = require("aws-sdk");
const uuid = require("uuid").v4;

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
});

module.exports.S3PetUploadMiddleware = async function S3PetUploadMiddleware(
  req,
  res,
  next
) {
  const text = req.body.text;
  req.body = JSON.parse(text);
  const file = req.file;

  try {
    if (typeof file === "undefined") {
      next();
    }

    const s3Params = {
      Bucket: process.env.BUCKET_NAME,
      Key: `uploads/${uuid()}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    await s3.upload(s3Params, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      req.petImage = data.Location;

      next();
    });
  } catch (e) {
    console.log(e);
  }
};
