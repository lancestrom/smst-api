require("dotenv").config();

const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/error");

const app = express();

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

// const authRoutes = require("./routes/auth.routes");

const sekolahRoutes = require("./routes/sekolah.routes");

// const heroRoutes = require("./routes/hero.routes");

const jurusanRoutes = require("./routes/jurusan.routes");

// const teacherRoutes = require("./routes/teacher.routes");

// const postRoutes = require("./routes/post.routes");

/*
|--------------------------------------------------------------------------
| Swagger
|--------------------------------------------------------------------------
*/

const { swaggerUi, swaggerDocument } = require("./docs/swagger");

/*
|--------------------------------------------------------------------------
| Middleware
|--------------------------------------------------------------------------
*/

// app.use(cors());

// app.use(express.json());

// app.use(
//   express.urlencoded({
//     extended: true,
//   }),
// );

/*
|--------------------------------------------------------------------------
| Static Upload
|--------------------------------------------------------------------------
*/

// app.use("/uploads", express.static("uploads"));

/*
|--------------------------------------------------------------------------
| Root
|--------------------------------------------------------------------------
*/

// app.get("/", (req, res) => {
//   res.json({
//     success: true,

//     message: "School Management API",

//     version: "1.0.0",

//     documentation: "/api-docs",
//   });
// });

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// app.use("/api/auth", authRoutes);

app.use("/api/sekolah", sekolahRoutes);

// app.use("/api/hero", heroRoutes);

app.use("/api/jurusan", jurusanRoutes);

// app.use("/api/teachers", teacherRoutes);

// app.use("/api/posts", postRoutes);

/*
|--------------------------------------------------------------------------
| Swagger
|--------------------------------------------------------------------------
*/

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/*
|--------------------------------------------------------------------------
| Error Handler
|--------------------------------------------------------------------------
*/

app.use(errorHandler);

/*
|--------------------------------------------------------------------------
| Server
|--------------------------------------------------------------------------
*/


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  console.log(
    `Swagger:
http://localhost:${PORT}/api-docs`,
  );
});
