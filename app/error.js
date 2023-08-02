const notFoundError = (req, res, next) => {
  const error = new Error("Resource not found");
  error.status = 404;
  next(error);
};

const serverError = (error, req, res, next) => {
  const message = error.message ? error.message : "Something went wrong";
  const statusCode = error.status ? error.status : 500;

  res.status(statusCode).json({ message });
};

module.exports = {
  notFoundError,
  serverError,
};
