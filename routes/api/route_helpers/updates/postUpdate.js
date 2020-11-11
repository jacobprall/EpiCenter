const validateUpdateInput = require("../../../../validation/updates");
const Update = require("../../../../models/Update");
const User = require("../../../../models/User");


const postUpdate = (req, res) => {
  const { errors, isValid } = validateUpdateInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newUpdate = new Update({
    user: req.user.id,
    status: req.body.status,
    last_test: req.body.last_test,
    next_test: req.body.next_test,
    text: req.body.text,
    date: req.body.date,
  });

  newUpdate.save().then((update) => res.json(update));
};

export default postUpdate;