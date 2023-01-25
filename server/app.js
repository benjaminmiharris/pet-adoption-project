const express = require("express");
const app = express();
// const fs = require("fs");
const cors = require("cors");
// const jwt = require("jsonwebtoken");
app.use(express.json());
app.use(cors());

// const UserClass = require("./classes/userClass");
// const userClass = new UserClass();

const PetClass = require("./classes/petClass");
const petClass = new PetClass();

// app.post("/test", userClass.CreateUser);

app.post("/pet/create", petClass.CreatePet);

app.get("/pet", petClass.GetPets);

app.get("/pet/:id", petClass.GetPetId);

app.listen(3002);
