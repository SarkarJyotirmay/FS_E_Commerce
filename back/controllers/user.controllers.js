const UserModel = require("../models/user.model.js");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  // Todo:  Write validation for req body
  try {
    // const hashPass = await bcrypt.hash(req.body.password, 10) => to avoid redundancy moved to user model
    await UserModel.create(req.body);
    res.json({
      succes: true,
      message: "Registration successfull",
      user: req.body,
      from: "register API",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to register user",
      from: "register API",
    });
  }
};
// register => payload => Schema

const login = async (req, res) => {
  // email and pass structure validation is checked in middleware
  // cjheck if user is present in db
  // check if user password matches
  try {
    const user = await UserModel.findOne({email: req.body.email});
    const plainTextpass = req.body.password;

    if (!user) {
      return res.status(500).json({
        success: false,
        message: "User not found in DB",
        from: "login API",
      });
    }
    let passMatched = await bcrypt.compare(plainTextpass, user.password);
    if (!passMatched) {
      return res.status(401).json({
        success: false,
        message: "Wrong password",
        from: "login API",
      });
    }
    res.json({
      success: true,
      message: "Login successful",
      user: user, // coming from middleware
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "login API failed",
      from: "login API",
    });
  }
};
// login => payload => {email, password}

const forgotPassword = async (req, res) => {
  res.json({
    succes: true,
    message: "Dummy forgot password API",
  });
};

const resetPassword = async (req, res) => {
  res.json({
    succes: true,
    message: "Dummy reset password API",
  });
};

const userController = {
  register,
  login,
  forgotPassword,
  resetPassword,
};

module.exports = userController;
