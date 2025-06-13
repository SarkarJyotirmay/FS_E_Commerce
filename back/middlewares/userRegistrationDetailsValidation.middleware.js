const isUserRegistrationValid = (req, res, next) => {
  const user = req.body;
  if (!isFNameValid(user.firstName) || !isLNameValid(user.lastName) || !isEmailValid(user.email) || !isMobileValid(user.mobNo) ) {
    return res
    .status(500)
    .json({
      success: false,
      message: "Invalid credentials, please enter all valid details",
    });
  }
  next();
};

function isFNameValid(fname) {
  if (fname.length < 2) return false;
  if (/[!@#$%^&*()]/.test(fname)) return false;
  return true;
}

function isLNameValid(lname) {
  if (lname.length < 2) return false;
  if (/[!@#$%^&*()]/.test(lname)) return false;
  return true;
}

function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isMobileValid(mobile) {
  const mobileRegex = /^[6-9]\d{9}$/;
  return mobileRegex.test(mobile);
}


module.exports = isUserRegistrationValid
