/* eslint-disable consistent-return */
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../../../config/keys");
const User = require("../../../../models/User");
const validateLoginInput = require("../../../../validation/login");

const EXPIRES_IN_SECONDS = 3600;

const loginCallback = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const { email, password } = req.body;

  User.findOne({
    email,
  }).then((user) => {
    if (!user) {
      errors.email = "This email has not been registered";
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          email: user.email,
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: EXPIRES_IN_SECONDS,
          },
          (_err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`,
            });
          }
        );
      } else {
        errors.password = "Incorrect Password";
        return res.status(400).json(errors);
      }
    });
  });
  return res.token;
};

module.exports = loginCallback;
