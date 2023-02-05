const { userValidation } = require("../validations/user-schemas");

class User {
  CreateUser = (req, res) => {
    const isValid = userValidation(req.body);

    if (!isValid) {
      return res.status(400).send();
    }

    console.log(req.body);
    // // const { email, password, firstname, lastname, mobile } =
    // //   req.body;

    return res.json(req.body);
  };
}

module.exports = User;
