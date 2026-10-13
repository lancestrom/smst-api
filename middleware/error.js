function errorHandler(error, req, res, next) {
  if (res.headersSent) {
    return next(error);
  }

  console.error(error);

  const isDatabaseAccessDenied =
    error.code === "ER_ACCESS_DENIED_ERROR" || error.errno === 1045;
  const requestedStatus = Number(error.status || error.statusCode);
  let statusCode =
    Number.isInteger(requestedStatus) &&
    requestedStatus >= 400 &&
    requestedStatus < 600
      ? requestedStatus
      : 500;

  if (isDatabaseAccessDenied) {
    statusCode = 503;
  }

  res.status(statusCode).json({
    success: false,
    message: isDatabaseAccessDenied
      ? "Akses database ditolak. Periksa DB_USER, DB_PASSWORD, dan izin pengguna database pada file .env."
      : statusCode >= 500
        ? "Terjadi kesalahan pada server"
        : error.message || "Permintaan tidak dapat diproses",
  });
}

module.exports = errorHandler;
