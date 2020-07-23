import users from "./routes/users";
import cookieParser from "cookie-parser";
import express, { json, urlencoded } from "express";
import httpErrors from "http-errors";
import logger from "morgan";
import { join } from "path";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(join(__dirname, "build")));

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

app.use("/api/", users);

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "build", "index.html"));
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
