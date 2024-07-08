import pageRouter from "../routes/pageRoutes.js";

const configureRoutes = (app) => {
  app.use("/", pageRouter);
  app.use("*", (req, res) => {
    res.status(404).json({
      message: `Can't find ${req.originalUrl} on this server!`,
    });
  });
};

export default configureRoutes;
