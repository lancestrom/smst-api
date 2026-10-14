const db = require("../config/database");

exports.getAllmitra = async (req, res, next) => {
  try {
    const [rows] = await db.query(`SELECT * from  bkk_mitra_perusahaan`);

    res.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllkegiatan = async (req, res, next) => {
  try {
    const [rows] = await db.query(`SELECT * from bkk_kegiatan`);

    res.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllkegiatanGambar = async (req, res, next) => {
  try {
    const [rows] = await db.query(`SELECT * from bkk_kegiatan_gambar
INNER JOIN bkk_kegiatan
ON bkk_kegiatan.id_kegiatan=bkk_kegiatan_gambar.id_kegiatan`);

    res.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};
