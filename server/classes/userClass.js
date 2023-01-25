class UserClass {
  CreateUser = (req, res) => {
    const { email, password, passwordVerify, firstname, lastname, mobile } =
      req.body;

    return res.json(req.body);
  };
}

module.exports = UserClass;
