const { createProxyMiddleware } = import("http-proxy-middleware");

export default function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://react-mini-projects-api.classbon.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/FastFood",
      },
    })
  );
}
