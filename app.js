const cookieParser = require("cookie-parser");
const express = require("express");
const httpErrors = require("http-errors");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "build")));

const productionEnvironment = "https://math-s-game.herokuapp.com";
const devEnvironment = "http://localhost:4000";

const corsOptions = {
  origin(origin, callback) {
    if (productionEnvironment.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const origin = {
  origin: process.env.NODE_ENV === "production" ? corsOptions : devEnvironment,
};

app.use(cors(origin));
app.use(compression());
app.use(helmet());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
