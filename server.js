const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const mongoURL = require("./config/keys").mongoURL;
const items = require("./routes/api/items");

app.use(express.json());
// app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send([{ user: 22 }]);
});

//
app.use("/api/items", items);

mongoose.connect(mongoURL, { useUnifiedTopology: true }, (error, client) => {
  if (error) {
    console.log("Unable to connect to database");
    return;
  }
  console.log("Connected correctly ");
});

// mongoose
//   .connect(mongoURL)
//   .then((res) => console.log("connection"))
//   .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
