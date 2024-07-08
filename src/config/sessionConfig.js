import MongoStore from "connect-mongo";
import env from "../../base-template/src/utils/validation/validateProcessEnv.js";

const sessionConfig = {
  secret: env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: env.MONGODB_URI,
    crypto: {
      secret: env.SESSION_SECRET,
    },
    autoRemove: "native", // Default
    ttl: 14 * 24 * 60 * 60, // 14 days
  }),
  cookie: {
    secure: env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
};

export default sessionConfig;
