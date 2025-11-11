function notFoundPage(req, req, next) {
  res.send({
    statusCode: 404,
    message: "NotFoundPage",
  });
}

function errorHandeler(err, req, res, next) {
  const status = err?.status ?? err?.statusCode ?? 500;
  res.send({
    statusCode: status,
    message: err?.message ?? "entervalServer",
  });
}

module.exports = {
  notFoundPage,
  errorHandeler,
};
