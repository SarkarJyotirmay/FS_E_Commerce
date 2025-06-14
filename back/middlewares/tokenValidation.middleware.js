const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")

dotenv.config()

const tokenValidation = async (req, res, next) => {
  // check if token present
  // check if token is ours or not (with our secret key)
  // check if token expired or not

  const authToken = req.headers.authorization.split(" ")[1];
  if (!authToken) {
    return res.status(401).json({
      success: false,
      message: "Token is not found",
      from: "token vailidation middleware",
    });
  }

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET_KEY);
    // console.log(decoded);
     next();
    
  } catch (err) {
    // err
    res.status(401).json({
        success: false,
        message: "Token is not verified",
        from: "token validation middleare"
    })
  }

 
};

module.exports = tokenValidation;
