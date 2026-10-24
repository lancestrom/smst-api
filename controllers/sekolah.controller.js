const db = require("../config/database");

exports.getProfile = async (req, res, next) => {
  try {
    const [rows] = await db.query("SELECT * FROM `sekolah_profil` LIMIT 1");

    res.json({
      success: true,
      data: rows[0] || null,
    });
  } catch (error) {
    next(error);
  }
};

exports.getVisi = async (req, res, next) => {
  try {
    const [rows] = await db.query("SELECT * FROM sekolah_visi LIMIT 1;");

    res.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

exports.getMisi = async (req, res, next) => {
  try {
    const [rows] = await db.query("SELECT * FROM `sekolah_misi`");

    res.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAlljurusan = async (req, res, next) => {
  try {
    const [rows] = await db.query(`SELECT * from sekolah_jurusan`);

    res.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

//     const {
//       school_name,
//       npsn,
//       address,
//       phone,
//       email,
//       website,
//       principal_name,
//       description,
//     } = req.body;

//     const [rows] = await db.query("SELECT id FROM school_profile LIMIT 1");

//     if (rows.length === 0) {
//       const [result] = await db.query(
//         `INSERT INTO school_profile
//                 (
//                     school_name,
//                     npsn,
//                     address,
//                     phone,
//                     email,
//                     website,
//                     principal_name,
//                     description
//                 )
//                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
//         [
//           school_name,
//           npsn,
//           address,
//           phone,
//           email,
//           website,
//           principal_name,
//           description,
//         ],
//       );

//       return res.status(201).json({
//         success: true,
//         message: "Identitas sekolah berhasil dibuat",
//         data: {
//           id: result.insertId,
//         },
//       });
//     }

//     await db.query(
//       `UPDATE school_profile
//              SET
//                 school_name = ?,
//                 npsn = ?,
//                 address = ?,
//                 phone = ?,
//                 email = ?,
//                 website = ?,
//                 principal_name = ?,
//                 description = ?
//              WHERE id = ?`,
//       [
//         school_name,
//         npsn,
//         address,
//         phone,
//         email,
//         website,
//         principal_name,
//         description,
//         rows[0].id,
//       ],
//     );

//     res.json({
//       success: true,
//       message: "Identitas sekolah berhasil diperbarui",
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.getVisionMission = async (req, res, next) => {
//   try {
//     const [vision] = await db.query("SELECT * FROM school_vision LIMIT 1");

//     const [missions] = await db.query(
//       `SELECT *
//              FROM school_missions
//              ORDER BY sort_order ASC, id ASC`,
//     );

//     res.json({
//       success: true,
//       data: {
//         vision: vision[0] || null,
//         missions,
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.updateVision = async (req, res, next) => {
//   try {
//     const { content } = req.body;

//     const [rows] = await db.query("SELECT id FROM school_vision LIMIT 1");

//     if (rows.length === 0) {
//       await db.query("INSERT INTO school_vision (content) VALUES (?)", [
//         content,
//       ]);
//     } else {
//       await db.query("UPDATE school_vision SET content = ? WHERE id = ?", [
//         content,
//         rows[0].id,
//       ]);
//     }

//     res.json({
//       success: true,
//       message: "Visi berhasil diperbarui",
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.createMission = async (req, res, next) => {
//   try {
//     const { content, sort_order = 0 } = req.body;

//     const [result] = await db.query(
//       `INSERT INTO school_missions
//             (content, sort_order)
//             VALUES (?, ?)`,
//       [content, sort_order],
//     );

//     res.status(201).json({
//       success: true,
//       message: "Misi berhasil ditambahkan",
//       data: {
//         id: result.insertId,
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.updateMission = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { content, sort_order } = req.body;

//     await db.query(
//       `UPDATE school_missions
//              SET content = ?, sort_order = ?
//              WHERE id = ?`,
//       [content, sort_order, id],
//     );

//     res.json({
//       success: true,
//       message: "Misi berhasil diperbarui",
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.deleteMission = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     await db.query("DELETE FROM school_missions WHERE id = ?", [id]);

//     res.json({
//       success: true,
//       message: "Misi berhasil dihapus",
//     });
//   } catch (error) {
//     next(error);
//   }
// };
