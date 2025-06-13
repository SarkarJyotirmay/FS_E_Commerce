const express = require("express");
const registrationValidation = require("../middlewares/userRegistrationDetailsValidation.middleware.js")

const {
    register,
    login,
    forgotPassword,
    resetPassword
} = require("../controllers/user.controllers.js");

const router = express.Router();

router.post("/register",registrationValidation, register);

router.post("/login", login);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password", resetPassword);

module.exports = router;