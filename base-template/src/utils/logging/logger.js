import globalErrorMessages from "../logging/messages/globalErrorMessages.js";
import { createLogger, format, transports } from "winston";
import env from "../validation/validateProcessEnv.js";
import path from "path";

const { CONSOLE_LOGGER, ERROR_LOGGER, LOG_FILE_PATH } = env;
const { combine, timestamp, json, errors, prettyPrint, colorize, printf } =
  format;

const logDir = path.resolve(LOG_FILE_PATH);

const consoleFormat = printf(({ level, message, timestamp }) => {
  let logMessage = `${timestamp} ${level}:`;

  if (typeof message === "object") {
    const statusCode =
      (message.error && message.error.statusCode) || message.statusCode;
    const errorMessage =
      (message.error && message.error.message) ||
      message.message ||
      "No message provided";

    logMessage += ` ${statusCode} ${errorMessage}`;
  } else {
    logMessage += ` ${message}`;
  }

  return logMessage;
});

const httpFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

// Configure Winston logger
const logger = createLogger({
  format: combine(timestamp(), json(), errors({ stack: true }), prettyPrint()),
  transports: [
    new transports.File({
      level: "error",
      filename: path.join(logDir, "exceptionsRejections.log"),
      handleRejections: true,
      handleExceptions: true,
    }),
    new transports.File({
      filename: path.join(logDir, "errors.log"),
      level: ERROR_LOGGER,
      format: combine(json(), errors()),
    }),
    new transports.File({
      filename: path.join(logDir, "combined.log"),
      handleExceptions: true,
      handleRejections: true,
      format: combine(json(), errors()),
    }),
    new transports.File({
      filename: path.join(logDir, "http.log"),
      level: "info", // Adjust the level if necessary
      format: combine(
        timestamp(),
        httpFormat // Use the custom HTTP format
      ),
    }),
    new transports.Console({
      level: CONSOLE_LOGGER,
      format: combine(
        colorize(),
        timestamp(),
        errors({ stack: true }),
        consoleFormat
      ),
    }),
  ],
  handleRejections: true,
});

// Add error event listeners to transports
logger.transports.forEach((transport) => {
  transport.on("error", (error) => {
    console.error(`${globalErrorMessages.winston} ${error}`);
  });
});

// Listen for initialization errors
logger.on("error", (err) => {
  console.error("Logger initialization error:", err);
  throw new Error("Winston Error", err);
});

export default logger;
