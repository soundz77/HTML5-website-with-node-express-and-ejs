import MongoStore from "connect-mongo";
import env from "../../utils/validation/validateProcessEnv.js";

const sessionConfig = Object.freeze({
  secret: env.SESSION_SECRET,
  resave: false, // Do not save session if unmodified
  saveUninitialized: false, // Do not create session until something is stored
  store: new MongoStore({
    mongoUrl: env.MONGODB_URI,
    collectionName: "sessions", // Specify the collection name
  }),
  cookie: {
    maxAge: 60 * 60 * 1000, // 1 hour
    httpOnly: true, // Ensure the cookie is only accessible via HTTP(S), not client-side scripts
    secure: env.NODE_ENV === "production", // Use secure cookies in production
  },
});

export default sessionConfig;
