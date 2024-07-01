import express from "express";
import path from "path";
import favicon from "serve-favicon";
import morgan from "morgan";
import RateLimit from "express-rate-limit";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import session from "express-session";

import { strictCors } from "./middleware/corsConfig.js";
import rateLimitConfig from "./middleware/rateLimitConfig.js";
import sessionConfig from "./middleware/sessionConfig.js";
import configureMongoose from "./middleware/configureMongoose.js";
import globalErrorHandler from "../utils/errors/globalErrorHandler.js";

const __dirname = path.resolve();

const configureMiddleware = (app) => {
  app.use(express.static("public"));
  app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
  app.use(helmet()); // Currently uses defaults
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan("combined"));
  app.use(session(sessionConfig));
  app.use(express.json());
  app.use(RateLimit(rateLimitConfig));
  app.use(compression());
  app.use(cors(strictCors)); // default for all routes
  app.set("view engine", "ejs");
  app.use(
    "/socket.io",
    express.static(
      path.join(__dirname, "../../node_modules/socket.io/client-dist")
    )
  );
  configureMongoose();

  // Error handling middleware should be last
  app.use(globalErrorHandler);
};

export default configureMiddleware;
