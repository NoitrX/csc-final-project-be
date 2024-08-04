const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const dotenv = require("dotenv");

dotenv.config();

const v1 = "/api/csc";

// Router
const handlerErrorMiddleware = require("./app/middlewares/handler-error");
const aboutRouter = require("./app/api/about/router");
const divisionRouter = require("./app/api/division/router");
const eventRouter = require("./app/api/event/router");
const eventDetailRouter = require("./app/api/event_detail/router");
const faqRouter = require("./app/api/faq/router");
const join_usRouter = require("./app/api/join_us/router");
const contactRouter = require("./app/api/contact/router");
const authRouter = require("./app/api/auth/router");
const path = require("path");

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

app.use("/public/uploads", express.static(path.join(__dirname, "public/uploads")));

// ROUTER
app.use(v1, aboutRouter);
app.use(v1, divisionRouter);
app.use(v1, eventRouter);
app.use(v1, eventDetailRouter);
app.use(v1, faqRouter);
app.use(v1, join_usRouter);
app.use(v1, contactRouter);
app.use(v1, authRouter);
app.use(handlerErrorMiddleware);
app.listen(9000, () => {
  console.log("app listening on port http://localhost:9000");
});
