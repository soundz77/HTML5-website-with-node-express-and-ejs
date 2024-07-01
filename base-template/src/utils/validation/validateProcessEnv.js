import { cleanEnv, port, str, makeValidator } from "envalid";
import AppError from "../errors/AppError.js";
import mongoDBMessages from "../logging/messages/mongoDBMessages.js";

// Custom validator for MongoDB URI
const mongodbUriValidator = makeValidator((value) => {
  if (!value.startsWith("mongodb+srv://")) {
    throw new AppError(mongoDBMessages.invalidURI, 500);
  }
  return value;
});

const loggerValidator = makeValidator((value) => {
  const choices = [
    "error",
    "warn",
    "info",
    "http",
    "verbose",
    "debug",
    "silly",
  ];

  if (!choices.includes(value)) {
    console.log("Invalid value: " + value);
    throw new AppError("Invalid logger level", 500);
  }
  return value;
});

// Validate and clean environment variables
const env = cleanEnv(process.env, {
  PORT: port(),
  NODE_ENV: str({
    choices: ["development", "production"],
    default: "development",
  }),
  CONSOLE_LOGGER: loggerValidator(),
  ERROR_LOGGER: loggerValidator(),
  HTTP_LOGGER: loggerValidator(),
  MONGODB_URI: mongodbUriValidator(),
  SESSION_SECRET: str(),
  LOG_FILE_PATH: str(),
});

export default env;
