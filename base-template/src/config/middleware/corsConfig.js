// Global CORS configuration to block all methods apart from GET and OPTIONS by default
const strictCors = Object.freeze({
  origin: "*", // Allow requests from any origin (Restrict in production?)
  methods: ["GET", "OPTIONS"], // Allow GET requests and OPTIONS preflight requests by default
  allowedHeaders: [
    "Origin",
    "Access-Control-Request-Method",
    "Access-Control-Request-Headers",
  ], // Allow headers used in preflight requests
});

// Route-specific CORS configuration to permit additional methods
// used in handler like this app.get("/authenticated-route", cors(authenticatedCorsOptions), (req, res) => {}));

const unrestrictedCors = Object.freeze({
  origin: "*", // Allow requests from any origin (May need to restrict this in production)
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"], // Allow common headers
});

export { strictCors, unrestrictedCors };
