import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import logger from "morgan";
import bodyParser from "body-parser";
import env from "dotenv";

import routes from "./routes";
import errorHandler from "./middlewares/errorHandler";

env.config();

// invoke express
const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// secure with helmet middleware
app.use(helmet());

// Set up CORS
app.use(cors());

// log requests to console
app.use(logger("dev"));

app.use("/api/v1/bot/", routes);

// connect to mongoDB
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.all("/", (request: express.Request, response: express.Response) => {
  return response.json({
    message: "Slackbot API",
    status: "success",
    data: {
      name: "Ezeani Ikenna",
      github: "@iykeevans",
      email: "elochi238@gmail.com",
      mobile: "07053052215",
      twitter: "@iykeevan",
    },
  });
});

app.all("*", (request: express.Request, response: express.Response) => {
  response.status(404).json({
    status: "error",
    message: "Route not found.",
  });
});

app.use(errorHandler);

export default app;
