import mongoose from "mongoose";
import handleAsync from "express-async-handler";
import env from "../../utils/validation/validateProcessEnv.js";
import logger from "../../utils/logging/logger.js";
import mongoDBMessages from "../../utils/logging/messages/mongoDBMessages.js";

const configureMongoose = handleAsync(async () => {
  // Disable strict mode for queries
  mongoose.set("strictQuery", false);

  // Connect to MongoDB
  await mongoose.connect(env.MONGODB_URI);
  logger.info(mongoDBMessages.success.connection);

  // Handle connection events
  mongoose.connection.on("error", (err) => {
    logger.error(`${mongoDBMessages.error.connectionError}: ${err.message}`);
  });

  mongoose.connection.on("disconnected", () => {
    logger.info(mongoDBMessages.error.disconnected);
  });

  // Gracefully handle process termination
  process.on(
    "SIGINT",
    handleAsync(async () => {
      await mongoose.disconnect();
      logger.info(mongoDBMessages.error.terminated);
      process.exit(0);
    })
  );
});

export default configureMongoose;
