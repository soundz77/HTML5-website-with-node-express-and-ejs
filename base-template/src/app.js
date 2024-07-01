import express from "express";

import configureMiddleware from "./config/configureMiddleware.js";
import configureRoutes from "./config/configureRoutes.js";

const app = express();

// configuration
configureMiddleware(app);
configureRoutes(app);

export default app;
