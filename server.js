require("dotenv").config();

const express = require("express");
const cors = require("cors");
const os = require("os");
const { execFileSync } = require("child_process");
const errorHandler = require("./middleware/error");

const app = express();

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

const sekolahRoutes = require("./routes/sekolah.routes");
const bkkRoutes = require("./routes/bkk.routes");

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

app.use("/api/bkk", bkkRoutes);

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
const HOST = process.env.HOST || "0.0.0.0";

const getWifiIPv4 = () => {
  if (process.platform !== "darwin") {
    return null;
  }

  try {
    const hardwarePorts = execFileSync(
      "networksetup",
      ["-listallhardwareports"],
      {
        encoding: "utf8",
      },
    );
    const wifiPort = hardwarePorts
      .split(/(?=Hardware Port:)/)
      .find((port) => /^Hardware Port:\s*(Wi-Fi|AirPort)\s*$/m.test(port));
    const deviceName = wifiPort?.match(/^Device:\s*(\S+)\s*$/m)?.[1];

    if (!deviceName) {
      return null;
    }

    return os
      .networkInterfaces()
      [
        deviceName
      ]?.find((entry) => (entry.family === "IPv4" || entry.family === 4) && !entry.internal && !entry.address.startsWith("169.254."))
      ?.address;
  } catch (error) {
    console.error("Gagal mendeteksi interface Wi-Fi:", error.message);
    return null;
  }
};

app.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT}`);
  console.log(`Swagger: http://localhost:${PORT}/api-docs`);

  const wifiIPv4 = getWifiIPv4();
  console.log(`Wi-Fi IP: ${wifiIPv4 || "Alamat IPv4 Wi-Fi tidak ditemukan"}`);
});
