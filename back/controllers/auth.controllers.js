const bypassLogin = (req, res) => {
  res.json({
    success: true,
    message: "Bypassed login via state",
    user: req.userData, // coming from token validation middleware
  });
};

const authControllers = {
  bypassLogin,
};

module.exports = authControllers;
