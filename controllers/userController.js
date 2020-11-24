const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const User = require("../models/User");
const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register")
const EXPIRES_IN_SECONDS = 3600;

exports.currentUser = (req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email,
  });
  res.json(user);
};

exports.login = (req, res) => {
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

exports.register = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        username: "A user has already registered that email",
      });
    }
    const newUser = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      city: req.body.city,
      state: req.body.state,
      age: req.body.age,
      status: [],
      connections: [],
      posts: [],
    });

    bcrypt.genSalt(10, (_err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((u) => {
            const payload = {
              id: u.id,
              email: u.email,
            };

            jwt.sign(
              payload,
              keys.secretOrKey,
              {
                expiresIn: EXPIRES_IN_SECONDS,
              },
              (_e, token) => {
                res.json({
                  success: true,
                  token: `Bearer ${token}`,
                });
              }
            );
          })
          .catch((error) => res.status(400).json(error));
      });
    });
  });
  return res.token;
};