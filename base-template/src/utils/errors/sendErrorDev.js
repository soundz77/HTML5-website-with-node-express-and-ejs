import globalErrorMessages from "../logging/messages/globalErrorMessages.js";
import logger from "../logging/logger.js";

const sendErrorDev = (err, req, res) => {
  const logEntry = {
    method: req.method || "UNKNOWN_METHOD",
    url: req.originalUrl ? req.originalUrl.split("?")[0] : "UNKNOWN_URL", // Exclude query parameters
    ip: req.ip || req.connection.remoteAddress || "UNKNOWN_IP",
    userAgent: req.get("User-Agent") || "UNKNOWN_USER_AGENT",
    timestamp: new Date().toISOString(),
    headers: req.headers || {},
    userId: req.user ? req.user.id : "UNKNOWN_USER",
    statusCode: res.statusCode || "UNKNOWN_STATUS",
    error: req.error ? req.error.message : err,
    stack: req.error ? req.error.stack : "NO_STACK_TRACE",
  };

  logger.error(logEntry);

  if (req?.originalUrl?.startsWith("/api")) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  return res.status(err.statusCode).render("error", {
    title: globalErrorMessages.sendErrorDev,
    message: err.message,
  });
};

export default sendErrorDev;
