import "dotenv/config";

import AppError from "./utils/errors/AppError.js";
import logger from "./utils/logging/logger.js";
import env from "./utils/validation/validateProcessEnv.js";
import serverMessages from "./utils/logging/messages/serverMessages.js";
import asyncMessages from "./utils/logging/messages/asyncMessages.js";
import checkVarsSet from "./utils/validation/checkVarsSet.js";
import app from "./app.js";

const checkRequiredVars = () => {
  const varsSet = checkVarsSet({
    serverMessages,
    asyncMessages,
  });

  if (!varsSet) {
    throw new AppError("Required parameters missing. Can't start server", 400);
  }
};

const handleServerError = (err) => {
  logger.error(`${serverMessages.errors.startup} ${err}`);

  if (err.syscall !== "listen") {
    throw new AppError(err, 500);
  }

  const bind =
    typeof env.PORT === "string" ? `Pipe ${env.PORT}` : `Port ${env.PORT}`;

  const errorActions = {
    EACCES: () => {
      logger.error(`${bind} ${serverMessages.errors.privileged}`);
      process.exit(1);
    },
    EADDRINUSE: () => {
      logger.error(`${bind} ${serverMessages.errors.inUse}`);
      process.exit(1);
    },
  };

  if (errorActions[err.code]) {
    errorActions[err.code]();
  } else {
    logger.error(`${serverMessages.errors.startup} ${err}`);
    throw err;
  }
};

const handleShutdown = () => {
  logger.info(serverMessages.success.shutdown);
  server.close(() => {
    logger.info(serverMessages.success.shutdown);
    process.exit(0);
  });
};

const handleUncaughtException = (err) => {
  logger.error(`${asyncMessages.uncaughtException} ${err}`);
  process.exit(1);
};

const handleUnhandledRejection = (err) => {
  logger.error(`${asyncMessages.unhandledRejection} ${err}`);
  process.exit(1);
};

const setupProcessHandlers = () => {
  process.on("uncaughtException", handleUncaughtException);
  process.on("unhandledRejection", handleUnhandledRejection);
  process.on("SIGTERM", handleShutdown);
  process.on("SIGINT", handleShutdown);
};

// Check required variables before starting the server
checkRequiredVars();

// Start the server
const server = app.listen(env.PORT, () => {
  logger.info(serverMessages.success.startup);
});

// Handle server errors
server.on("error", handleServerError);

// Set up process handlers
setupProcessHandlers();
