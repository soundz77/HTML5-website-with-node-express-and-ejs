import AppError from "./AppError.js";
import globalErrorMessages from "../logging/messages/globalErrorMessages.js";

const handleDuplicateFieldsDB = (err) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `${globalErrorMessages.duplicateField} ${value}.`;
  return new AppError(message, 400);
};

export default handleDuplicateFieldsDB;
