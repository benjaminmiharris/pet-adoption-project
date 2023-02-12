const jwt = require("jsonwebtoken");

const UsersDAO = require("../models/UsersDAO");

module.exports.AuthMiddleware = async function AuthMiddleware(req, res, next) {
  let { authorization } = req.headers;

  console.log("authorization", authorization);

  if (!authorization) return res.status(401).send();

  authorization = authorization.replace("Bearer ", "");

  console.log("authorization", authorization);

  try {
    const tokenData = jwt.verify(authorization, process.env.JWT_SECERET);

    console.log("tokenData", tokenData);
    console.log("tokenData.user_id", tokenData.user_id);

    const userData = await UsersDAO.getUserById(tokenData.user_id);

    console.log("USERDATA", userData);

    req.currentUser = userData;
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: "unsuccessful decryption of token attempt try again.",
    });
  }

  next();
};
