import cookieParser from "cookie-parser";
import express, { json, urlencoded } from "express";
import httpErrors from "http-errors";
import logger from "morgan";
import { join } from "path";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import packageJson from "./package.json";
import mountRoutes from "./routes";

require("dotenv").config();

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(join(__dirname, "build")));

const url =
  process.env.NODE_ENV === "production"
    ? packageJson.homepage
    : packageJson.devUrl.node;

const corsOptions = {
  origin(origin, callback) {
    if (url.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const origin = {
  origin: process.env.NODE_ENV === "production" ? corsOptions : "*",
};

app.use(cors(origin));
app.use(compression());
app.use(helmet());

mountRoutes(app);

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "./public/pages/error404.html"));
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
  console.error(err);
  if (err.status === 404) {
    res.sendFile(join(__dirname, "./public/pages/error404.html"));
  } else {
    res.status(err.status || 500);
    res.json(err);
  }
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server listening`);
});
