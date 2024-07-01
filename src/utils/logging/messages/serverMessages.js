import env from "../../validation/validateProcessEnv.js";

const serverMessages = Object.freeze({
  errors: {
    startup: "Server startup error",
    rateLimit: "Too many requests from this IP, please try again later",
    required: "Server environment variables are not properly set",
    privileged: "Requires privileged access",
    inUse: "Address already in use",
  },
  success: {
    startup: `Server successfully started on port ${env.PORT} in ${env.NODE_ENV} mode.`,
    shutdown: "Server shutting down gracefully...",
  },
});

export default serverMessages;
