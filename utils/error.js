// Custom error
const error = (message = "Something went wrong", code = 500) => {
  const err = new Error(message);
  err.status = code;
  return err;
};

module.exports = error;
