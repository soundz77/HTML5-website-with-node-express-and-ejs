import express from "express";

import configureMiddleware from "./config/configureMiddleware.js";

const app = express();

// configuration
configureMiddleware(app);

export default app;
