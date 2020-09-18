const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const updates = require("./routes/api/updates");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/updates", updates);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
app.get("/", (req, res) => res.send("Hello World"));
