import express from "express";
import helmet from "helmet";
import cors from "cors";
import logger from "morgan";

// invoke express
const app = express();

// secure with helmet middleware
app.use(helmet());

// Set up CORS
app.use(cors());

// log requests to console
app.use(logger("dev"));

app.get("/ping", (req: express.Request, res: express.Response) => {
  res.send("pong");
});

export default app;
