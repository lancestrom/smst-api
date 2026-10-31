const swaggerUi = require("swagger-ui-express");

const swaggerDocument = {
  openapi: "3.0.3",
  info: {
    title: "	Sistem Manajemen Sekolah Terintegrasi",
    version: "1.0.0",
  },
  paths: {
    "/api/sekolah": {
      get: {
        tags: ["Sekolah"],
        summary: "Get Sekolah profile",
        responses: {
          200: {
            description: "Sekolah profile",
          },
        },
      },
    },
    "/api/sekolah/visi": {
      get: {
        tags: ["Sekolah"],
        summary: "Get Sekolah visi",
        responses: {
          200: {
            description: "Sekolah visi",
          },
        },
      },
    },
    "/api/sekolah/misi": {
      get: {
        tags: ["Sekolah"],
        summary: "Get Sekolah misi",
        responses: {
          200: {
            description: "Sekolah misi",
          },
        },
      },
    },
    "/api/sekolah/jurusan": {
      get: {
        tags: ["Sekolah"],
        summary: "Get all Jurusan",
        responses: {
          200: {
            description: "Jurusan",
          },
        },
      },
    },
    //BKK
    "/api/bkk/profil_bkk": {
      get: {
        tags: ["BKK"],
        summary: "Get Profil BKK",
        responses: {
          200: {
            description: "BKK profil",
          },
        },
      },
    },
    "/api/bkk/mitra": {
      get: {
        tags: ["BKK"],
        summary: "Get all BKK partners",
        responses: {
          200: {
            description: "BKK partners",
          },
        },
      },
    },
    "/api/bkk/kegiatan": {
      get: {
        tags: ["BKK"],
        summary: "Get all BKK kegiatan",
        responses: {
          200: {
            description: "BKK kegiatan",
          },
        },
      },
    },
    "/api/bkk/kegiatan/gambar": {
      get: {
        tags: ["BKK"],
        summary: "Get all BKK kegiatan gambar",
        responses: {
          200: {
            description: "BKK kegiatan gambar",
          },
        },
      },
    }
  },
};

module.exports = { swaggerUi, swaggerDocument };
