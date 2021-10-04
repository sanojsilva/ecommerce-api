module.exports = ({ env }) => ({
  timeout: 100,
  load: {
    before: ["responseTime", "logger", "cors", "responses", "gzip"],
    order: [
      "Define the middlewares' load order by putting their name in this array is the right order",
    ],
    after: ["parser", "router"],
  },
  settings: {
    ctx: {
      enabled: true,
    },
    public: {
      path: "./public",
      maxAge: 60000,
    },
    csp: {
      enabled: true,
      policy: ["block-all-mixed-content"],
    },
    parser: {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 10 * 1024 * 1024, // Defaults to 200mb
      },
    },
    p3p: {
      enabled: true,
      value: "",
    },
    hsts: {
      enabled: true,
      maxAge: 31536000,
      includeSubDomains: true,
    },
    xframe: {
      enabled: true,
      value: "SAMEORIGIN",
    },
    xss: {
      enabled: true,
      mode: "block",
    },
    cors: {
      enabled: true,
      credentials: true,
      origin:
        env("NODE_ENV") === "development"
          ? ["http://localhost:3000", "http://localhost:1337"]
          : ["http://localhost:3000"],
    },
    ip: {
      enabled: false,
      whiteList: [],
      blackList: [],
    },
  },
});
