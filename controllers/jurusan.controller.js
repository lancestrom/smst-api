const db = require("../config/database");

exports.getAll = async (req, res, next) => {
  try {
    const [rows] = await db.query(`SELECT * FROM jurusan`);

    res.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};
