import loggingMessages from "../../logging/loggingMessages.js";

const messages = loggingMessages.validateRequest.errors;

const escapeStr = (str) => {
  try {
    if (typeof str === "string") {
      return str.replace(/[&<>"']/g, function (match) {
        return {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }[match].trim();
      });
    } else {
      console.error(messages.dataType); // Log the error for debugging
      return ""; // Return an empty string or null
    }
  } catch (error) {
    console.error("Error in escapeStr:", error); // Log any unexpected errors
    return str; // Return the original string in case of error
  }
};

export default escapeStr;
