const UserModel = require("../models/user.model.js");


const register = async (req, res) => {
  // Todo:  Write validation for req body
  try {
    await UserModel.create(req.body);
    res.json({
      succes: true,
      message: "Dummy resgister API",
    });
  } catch (error) {
    res
    .status(500)
    .json({
        success: false,
        message: "Invalid credentials, please enter all valid details"
    })
  }
};

const login = async (req, res) => {
  res.json({
    succes: true,
    message: "Dummy login API",
  });
};

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
