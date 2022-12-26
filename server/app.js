const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
var adminRouter = require("./Routes/admin.routes");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set("strictQuery", true);

const port = process.env.PORT;
const dbUrl = process.env.URI;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello!");
});

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

app.use("/admin", adminRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "No such route exists",
  });
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: "Error Message",
  });
});

module.exports = app;
