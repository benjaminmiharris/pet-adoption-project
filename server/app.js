require("dotenv").config();

const express = require("express");
const { initDB } = require("./models/init");
const UsersController = require("./controllers/UsersController");
const PetsController = require("./controllers/PetController");

initDB();
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post("/register", UsersController.register);
app.post("/login", UsersController.login);

// const PetClass = require("./controllers/PetClass");
// const petClass = new PetClass();

// const User = require("./controllers/User");
// const user = new User();

// app.post("/test", userClass.CreateUser);

app.post("/pet/create", PetsController.createPet);

// app.get("/pet", petClass.GetPets);

// app.get("/pet/:id", petClass.GetPetId);

// app.post("/create-user", user.CreateUser);

app.listen(3002, async () => {
  console.log("Server is running on port 3002");
});
