const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(oldData) {
  const data = { ...oldData };
  const errors = {};

  data.username = validText(data.username) ? data.username : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";

  if (Validator.isEmpty(data.first_name, {})) {
    errors.username = "First Name Required";
  }

  if (Validator.isEmpty(data.last_name)) {
    errors.username = "Last Name Required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = "City field is required";
  }

  if (Validator.isEmpty(data.state)) {
    errors.state = "State field is required";
  }

  if (!Validator.isInt(data.age)) {
    errors.age = "Age field is required";
  }

  if (
    !Validator.isLength(data.password, {
      min: 6,
      max: 30,
    })
  ) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
