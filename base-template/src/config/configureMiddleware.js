import express from "express";
import RateLimit from "express-rate-limit";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";
import httpLogger from "../utils/logging/HTTPlogger.js";
import { strictCors } from "./middleware/corsConfig.js";
import rateLimitConfig from "./middleware/rateLimitConfig.js";
import helmetConfig from "./middleware/helmetConfig.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configureMiddleware = (app) => {
  app.use(httpLogger);
  app.use(helmet(helmetConfig)); // Currently using defaults
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(RateLimit(rateLimitConfig));
  app.use(compression());
  app.use(cors(strictCors));
  app.use(express.static("public"));
  app.use(express.static(path.join(__dirname, "../../public")));
};

export default configureMiddleware;
