import "dotenv/config";
import express from "express";
import configureMiddleware from "../src/config/configureMiddleware.js";

const setupApp = () => {
  const app = express();
  configureMiddleware(app);

  return app;
};

export default setupApp;
