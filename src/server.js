const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const initRouter = require("./routes/index");
const multer = require("multer");

const app = express();

app.use(morgan("tiny"));
app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

initRouter(app);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use(express.json());

app.use(express.static(path.join(__dirname, "./public/image")));

console.log(__dirname);

mongoose.set("strictPopulate", false);
mongoose
  .connect("mongodb+srv://binh:Binh1111@trimmapapi.snowojn.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected ");
  })
  .then(() => {
    app.listen(5000, () => {
      console.log(`Running port 5000`);
    });
  })
  .catch((err) => {
    console.log("🚀 ~ file: server.js:41 ~ err:", err);
    process.exit(1);
  });
