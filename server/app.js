require("dotenv").config();

const express = require("express");
const { initDB } = require("./models/init");
const UsersController = require("./controllers/UsersController");
const PetsController = require("./controllers/PetController");
const { S3PetUploadMiddleware } = require("./middlewares/S3PetImageUpload");

const {
  AuthMiddleware,
  RoleCheckerMiddleware,
} = require("./middlewares/AuthMiddlesware");

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

// app.post("/verify", (req, res) => {
//   console.log(req.headers.authorization);

//   return res.status(200).send({
//     success: true,
//     message: "authentic user",
//   });
// });

app.post("/register", UsersController.register);
app.post("/login", UsersController.login);

app.get("/user", AuthMiddleware, UsersController.getUserProfile);

app.put("/user/:id", UsersController.updateUserProfile);

app.get("/pet", PetsController.getPets);

app.get("/pet/:id", PetsController.getPetId);

app.get("/pets/many", PetsController.getPetIds);

app.put("/pet/:id", AuthMiddleware, PetsController.updatePetObject);

app.post(
  "/pet/create",
  [
    upload.single("image"),
    AuthMiddleware,
    RoleCheckerMiddleware,
    S3PetUploadMiddleware,
  ],
  PetsController.createPet
);

app.post("/pet/:id/save", AuthMiddleware, UsersController.savePetToUserProfile);

app.post("/pet/:id/adopt", AuthMiddleware, UsersController.adoptOrFosterAPet);

app.listen(3002, async () => {
  console.log("Server is running on port 3002");
});
