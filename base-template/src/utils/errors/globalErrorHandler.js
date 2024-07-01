import env from "../validation/validateProcessEnv.js";
import handleCastErrorDB from "./handleCastErrorDB.js";
import handleDuplicateFieldsDB from "./handleDuplicateFieldsDB.js";
import handleValidationErrorDB from "./handleValidationErrorDB.js";
import handle404Errors from "./handle404Errors.js";
import sendErrorDev from "./sendErrorDev.js";
import sendErrorProd from "./sendErrorProd.js";

/* eslint-disable no-unused-vars */
const globalErrorHandler = (err, req, res, next) => {
  /* eslint-enable no-unused-vars */
  try {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    if (env.NODE_ENV === "development") {
      sendErrorDev(err, req, res);
    } else if (env.NODE_ENV === "production") {
      let errorToSend = { ...err };

      // Handle specific error types
      if (errorToSend.name === "CastError") {
        errorToSend = handleCastErrorDB(errorToSend);
      } else if (errorToSend.code === 11000) {
        errorToSend = handleDuplicateFieldsDB(errorToSend);
      } else if (errorToSend.name === "ValidationError") {
        errorToSend = handleValidationErrorDB(errorToSend);
      } else if (errorToSend.statusCode === 404) {
        errorToSend = handle404Errors(req, res);
      }

      sendErrorProd(errorToSend, req, res);
    }
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export default globalErrorHandler;
