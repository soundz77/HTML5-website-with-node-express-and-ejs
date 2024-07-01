import AppError from "../../utils/errors/AppError.js";

/**
 * Checks if all specified variables exist (are not null, undefined, or empty strings).
 * @param {Object} varsObj - An object containing the variables to check.
 * @returns {boolean} - Returns true if all variables exist and are valid.
 * @throws {AppError} - Throws an error if any variables are missing or invalid.
 */
const checkVarsSet = (varsObj) => {
  const missingVars = Object.entries(varsObj).filter(
    ([key, value]) => value === null || value === undefined || value === "" // eslint-disable-line no-unused-vars
  );

  if (missingVars.length > 0) {
    throw new AppError(
      `Required parameters are invalid : ${missingVars
        .map(([key]) => key)
        .join(", ")}`,
      400
    );
  }

  return true;
};

export default checkVarsSet;
