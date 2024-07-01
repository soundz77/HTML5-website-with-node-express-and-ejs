import globalErrorMessages from "../logging/messages/globalErrorMessages.js";
import { createLogger, format, transports } from "winston";
import env from "../validation/validateProcessEnv.js";
import path from "path";

const { CONSOLE_LOGGER, ERROR_LOGGER, HTTP_LOGGER, LOG_FILE_PATH } = env;
const { combine, timestamp, json, errors, prettyPrint, colorize, printf } =
  format;

const logDir = path.resolve(LOG_FILE_PATH);

// Custom console format for errors
const consoleFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

// Configure Winston logger
const logger = createLogger({
  format: combine(timestamp(), json(), errors({ stack: true }), prettyPrint()),
  transports: [
    // Error logging to file
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

    // Console logging
    new transports.Console({
      level: CONSOLE_LOGGER,
      format: combine(
        colorize(),
        timestamp(),
        errors({ stack: true }),
        consoleFormat // Use custom format for console logs
      ),
    }),

    // HTTP logging
    new transports.Http({
      level: HTTP_LOGGER,
      format: combine(json(), errors()),
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
