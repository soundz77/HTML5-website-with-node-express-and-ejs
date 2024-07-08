import mongoose from "mongoose";
import env from "../../base-template/src/utils/validation/validateProcessEnv.js";
import handleAsync from "express-async-handler";
import logger from "../../base-template/src/utils/logging/logger.js";
import mongoDBMessages from "../../base-template/src/utils/logging/messages/mongoDBMessages.js";

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
