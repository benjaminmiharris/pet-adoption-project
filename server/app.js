require("dotenv").config();

const express = require("express");
const { initDB } = require("./models/init");
const UsersController = require("./controllers/UsersController");
const PetsController = require("./controllers/PetController");
const { S3PetUploadMiddleware } = require("./middlewares/S3PetImageUpload");

const { AuthMiddleware } = require("./middlewares/AuthMiddlesware");

initDB();
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const multer = require("multer");
// const AWS = require("aws-sdk");
// const uuid = require("uuid").v4;

// Set up storage for uploaded files
const storage = multer.memoryStorage({});
const upload = multer({ storage: storage });

// Set up the S3 client
// const s3 = new AWS.S3({
//   accessKeyId: process.env.S3_ACCESS_KEY_ID,
//   secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
// });

app.post("/register", UsersController.register);
app.post("/login", UsersController.login);

// const PetClass = require("./controllers/PetClass");
// const petClass = new PetClass();

// const User = require("./controllers/User");
// const user = new User();

// app.post("/test", userClass.CreateUser);

// app.post("/pet/create", AuthMiddleware, PetsController.createPet);

// app.get("/pet", petClass.GetPets);

app.get("/pet/:id", PetsController.getPetId);

// app.post("/create-user", user.CreateUser);

app.post(
  "/pet/create",
  [upload.single("image"), AuthMiddleware, S3PetUploadMiddleware],
  PetsController.createPet
);

// app.post("/upload", upload.single("image"), (req, res, next) => {
//   const text = req.body.text;
//   const file = req.file;
//   const s3Params = {
//     Bucket: process.env.BUCKET_NAME,
//     Key: `uploads/${uuid()}-${file.originalname}`,
//     Body: file.buffer,
//     ContentType: file.mimetype,
//   };

//   s3.upload(s3Params, (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }

//     res.send(`Text: ${text}\nImage URL: ${data.Location}`);
//   });
// });

// upload.array("files"),

app.listen(3002, async () => {
  console.log("Server is running on port 3002");
});
