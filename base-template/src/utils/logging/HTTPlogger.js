// middleware/httpLogger.js
import logger from "./logger.js";

const httpLogger = (req, res, next) => {
  const { method, url } = req;
  const userAgent = req.headers["user-agent"];
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    const { statusCode } = res;
    const contentLength = res.get("Content-Length") || 0;

    const logMessage = `${method} ${url} ${statusCode} ${contentLength} ${duration}ms - ${userAgent}`;

    logger.log({
      level: "info",
      message: logMessage,
    });
  });

  next();
};

export default httpLogger;
