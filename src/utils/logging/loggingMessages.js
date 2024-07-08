import env from "../../../base-template/src/utils/validation/validateProcessEnv.js";

const port = env.PORT;
const mode = env.NODE_ENV;

const loggingMessages = {
  mongoDBConnection: {
    errors: {
      connectionError: "Error connecting to MongoDB",
      disconnected: "MongoDB disconnected",
      SIGINT: "SIGINT",
    },
    success: {
      connection: "Connected to MongoDB",
    },
  },
  server: {
    errors: {
      startup: "Server startup error",
      rateLimit: "Too many requests from this IP, please try again later",
    },
    success: {
      startup: `Server successfully started on port ${port} in ${mode} mode.`,
      shutdown: "Server shutting down gracefully...",
    },
  },
  async: {
    errors: {
      uncaughtException: "UNCAUGHT EXCEPTION! Shutting down...",
      unhandledRejection: "UNHANDLED REJECTION! Shutting down...",
    },
  },
  crud: {
    errors: {
      created: "Unable to create doc(s)",
      get: "No results found",
      updated: "Unable to update doc(s)",
      deleted: "Unabled to delete doc(s)",
      updateAvatar: "Avatar must be a JPG, JPEG, or PNG file",
      escaped: "Invalid data sent in a request was sanitised",
    },
    success: {
      created: "Document(s) created successfully",
      getAll: "Data fetched from all documents successfully",
      getOne: "Data fetched from one document successfully",
      updated: "Updated document(s) successfully",
      deleted: "Document(s) deleted successfully",
    },
  },
  errorControllers: {
    errors: {
      invalidValue: "Invalid value:",
      duplicateField: "Duplicate field:",
      invalidData: "Invalid data",
      invalidToken: "Invalid token. Please log in again!",
      expiredToken: "Your token has expired! Please log in again.",
      devError: "Something went wrong",
      prodError: "Something went very wrong",
      opError: "Something went wrong. Please try again later.",
      sendOpError: "SendErrorOperational",
      pageNotFound: "Unable to find the requested page.",
      winston: "Winston Transport Error:",
    },
  },
  validation: {
    usernameRequired: "Please tell us your name!",
    usernameErr: "Username can only contain letters and spaces",
    usernameLength: "Username must contain between 3 and 20 characters.",
    usernameRules:
      "Usernames can only contain letters, numbers, underscores and dashes",
    emailRequired: "Please check your email address",
    emailConfirm: "Emails are not the same",
    password: "Please provide a password",
    passwordConfirm: "Please check your password",
    passwordLength: "Password contain at least 8 characters",
    passwordRules:
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ageRules: "Age must be between 16 and 100",
    escaped: "Invalid characters were escaped",
    boolean: "Value must be true or false",
    string: "Value must be a string",
  },
  validateRequest: {
    errors: {
      rejected: "Bad request",
      required: "Missing required field",
      NaN: "NaN",
      dataType: "Invalid data type",
      unknown: "Unknown data type",
      noID: "No ID provided",
      invalidID: "Invalid ID provided",
    },
  },
  apiFeatures: {
    search: {
      errors: {
        query: "Required fields are missing",
        restricted: "Searches are limited to specific fields",
        invalid: "Invalid search field",
        age: "'age' must be a number",
        format: "must be a date in the format YYYY-MM-DDTHH:MM:SS",
        email: "'email' must be a valid email address",
        role: "'role' must be either 'admin' or 'user'",
      },
    },
    sort: {
      errors: {
        invalidValue: "Invalid sort option",
      },
    },
    limitFields: {
      errors: {
        notString: "Limit fields must be a comma-separated string",
        restrictedFields: "Invalid fields",
        required: "Required fields are missing",
      },
    },
    page: {
      errors: {
        required: "Required fields are missing",
        invalidPage: "Invalid page number",
        invalidLimit: "Invalid limiter",
      },
    },
  },
};

export default loggingMessages;
