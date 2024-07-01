import cors from "cors";
import { unrestrictedCors } from "./middleware/corsConfig.js";
import router from "../routes/router.js";

const routerConfig = (app) => {
  app.use("/", cors(unrestrictedCors));
  app.use("/", router);
};

export default routerConfig;
