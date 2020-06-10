module.exports = async (err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ message: err.message, status: "failure" });
};
