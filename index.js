const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const dotenv = require("dotenv");

dotenv.config();

const v1 = "/api/csc";

// Router
const aboutRouter = require("./app/api/about/router");
const divisionRouter = require("./app/api/division/router");
const eventRouter = require("./app/api/event/router");
const eventDetailRouter = require("./app/api/event_detail/router");
const faqRouter = require("./app/api/faq/router");
const join_usRouter = require("./app/api/join_us/router");

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
app.use(v1, eventDetailRouter);
app.use(v1, faqRouter);
app.use(v1, join_usRouter);
app.listen(3000, () => {
  console.log("app listening on port http://localhost:3000");
});
