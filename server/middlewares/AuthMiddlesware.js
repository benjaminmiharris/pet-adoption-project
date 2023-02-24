const jwt = require("jsonwebtoken");

const UsersDAO = require("../models/UsersDAO");

module.exports.AuthMiddleware = async function AuthMiddleware(req, res, next) {
  let { authorization } = req.headers;

  if (!authorization)
    return res.status(401).send({
      success: false,
      message: "please try and login again",
    });

  authorization = authorization.replace("Bearer ", "");

  try {
    const tokenData = jwt.verify(authorization, process.env.JWT_SECERET);

    const userData = await UsersDAO.getUserById(tokenData.user_id);

    req.currentUser = userData;
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: "unsuccessful decryption of token attempt try again.",
    });
  }

  next();
};

module.exports.RoleCheckerMiddleware = async function RoleCheckerMiddleware(
  req,
  res,
  next
) {
  if (req.currentUser.role == "admin") {
    next();
  } else {
    return res.status(401).send({
      success: false,
      message: "insufficent permissions to carry out this action",
    });
  }
};
