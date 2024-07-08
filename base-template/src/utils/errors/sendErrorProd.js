import globalErrorMessages from "../logging/messages/globalErrorMessages.js";

const sendErrorProd = (err, req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }

    console.error("ERROR: ", err);
    return res.status(500).json({
      status: "error",
      message: globalErrorMessages.prodError,
      err,
    });
  }

  if (err.isOperational) {
    return res.status(err.statusCode).render("error", {
      title: globalErrorMessages.prodError,
      msg: err.message,
    });
  }

  console.error("ERROR: ", err);
  return res.status(err.statusCode).render("error", {
    title: globalErrorMessages.prodError,
    msg: globalErrorMessages.prodError,
  });
};

export default sendErrorProd;
