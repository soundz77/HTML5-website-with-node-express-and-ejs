import serverMessages from "../../utils/logging/messages/serverMessages.js";

// Set up rate limiter: maximum of twenty requests per minute
const rateLimitConfig = Object.freeze({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 50000, // limits an IP to 20 requests on a window per minute
  message: serverMessages.errors.rateLimit,
});

export default rateLimitConfig;
