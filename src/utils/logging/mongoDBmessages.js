const mongoDBmessages = Object.freeze({
  errors: {
    connectionError: "Error connecting to MongoDB",
    disconnected: "MongoDB disconnected",
    SIGINT: "SIGINT",
    invalidURI: "Invalid MongoDB URI. Cannot connect to database",
    terminated: "MongoDB disconnected through app termination",
  },
  success: {
    connection: "Connected to MongoDB",
  },
});

export default mongoDBmessages;
