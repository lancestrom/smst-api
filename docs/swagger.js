const swaggerUi = require("swagger-ui-express");

const swaggerDocument = {
  openapi: "3.0.3",
  info: {
    title: "School Management API",
    version: "1.0.0",
  },
  paths: {
    "/api/sekolah": {
      get: {
        summary: "Get school profile",
        responses: {
          200: {
            description: "School profile",
          },
        },
      },
    },
    "/api/sekolah/visi": {
      get: {
        summary: "Get school vision",
        responses: {
          200: {
            description: "School vision",
          },
        },
      },
    },
    "/api/sekolah/misi": {
      get: {
        summary: "Get school missions",
        responses: {
          200: {
            description: "School missions",
          },
        },
      },
    },
    "/api/jurusan": {
      get: {
        summary: "Get all study programs",
        responses: {
          200: {
            description: "Study programs",
          },
        },
      },
    },
  },
};

module.exports = { swaggerUi, swaggerDocument };
