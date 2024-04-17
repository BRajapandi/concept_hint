const express = require("express");
const morgan = require("morgan"); // to view the api process timing

const productRouter = require("./controller/productCtrl");

const app = express();
var cors = require("cors");
app.use(cors());

app.use(express.json()); // instead of body parser
app.use(express.urlencoded({ extended: false })); // instead of body parser

app.use(morgan("dev"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// routes
app.use((req, res, next) => {
  req.userId = "ArunPandi";
  next();
});

app.use("/api/products", productRouter);

// routes end
app.use("*", (req, res) => {
  res.status(400).json({ message: "Invalid URL" });
});

app.listen("3003", () => {
  console.log("Node running on", process.env.PORT);
});
