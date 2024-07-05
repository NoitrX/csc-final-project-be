const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const dotenv = require("dotenv");

dotenv.config();

const v1 = "/api/csc";
// const handlerErrorMiddleware = require("./app/middlewares/handler-error");

// Router
const aboutRouter = require("./app/api/about/router");
const divisionRouter = require("./app/api/division/router");
const eventRouter = require("./app/api/event/router");

// End Router
const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.get("/", function (req, res) {
  res.send("Hello world!");
});

// ROUTER
app.use(v1, aboutRouter);
app.use(v1, divisionRouter);
app.use(v1, eventRouter);
app.listen(3000, () => {
  console.log("app listening on port http://localhost:3000");
});
