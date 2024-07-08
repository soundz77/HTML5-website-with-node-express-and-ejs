import express from "express";
import session from "express-session";
import favicon from "serve-favicon";
import path from "path";
import { fileURLToPath } from "url";
import sessionConfig from "../config/sessionConfig.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appMiddleware = (app) => {
  // Set view engine
  app.set("view engine", "ejs");

  // Serve favicon
  app.use(favicon(path.join(__dirname, "../../public", "favicon.ico")));

  // Use session middleware
  app.use(session(sessionConfig));

  app.use(
    "/socket.io",
    express.static(
      path.join(__dirname, "../../node_modules/socket.io/client-dist")
    )
  );
};

export default appMiddleware;
