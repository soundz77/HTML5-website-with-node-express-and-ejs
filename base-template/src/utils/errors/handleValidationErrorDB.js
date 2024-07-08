import AppError from "./AppError.js";
import globalErrorMessages from "../logging/messages/globalErrorMessages.js";

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `${globalErrorMessages.invalidData} ${errors.join(". ")}`;
  return new AppError(message, 400);
};

export default handleValidationErrorDB;
