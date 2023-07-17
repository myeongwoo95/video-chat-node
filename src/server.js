import express from "express";
import http from "http";

const port = 3000;
const app = express();
const { WebSocketServer } = require("ws");

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/*", (req, res) => {
  res.redirect("/");
});

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (ws, request) => {
  // 소켓 연결됬을때
  console.log("some soket is Connected to Server");

  // 소켓이 끊겼을때
  ws.on("close", () => {
    console.log("Disconnected from the Brower");
  });

  // 브라우저에게서 수신
  ws.on("message", (message) => {
    console.log(message.toString());
  });

  // 브라우저에게 발신
  ws.send("Message (hello world) from server");

  // 브로드캐스트
});

server.listen(port, () => {
  console.log(`listening ${port}`);
});
