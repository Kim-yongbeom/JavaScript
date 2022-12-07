const express = require("express");
const path = require("path");

const app = express();

app.use(
  "/static",
  // express.static -> 정적 파일을 제공하기 위한 express 기본 미들웨어 함수
  express.static(path.resolve(__dirname, "frontend", "static"))
);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("frontend", "index.html"));
});

app.listen({ port: 4000 }, () => {
  console.log("http://localhost:4000");
});
