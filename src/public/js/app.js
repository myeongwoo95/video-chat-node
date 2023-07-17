const ws = new WebSocket(`ws://${window.location.host}`);

// 소켓이 연결되었을 때
ws.addEventListener("open", () => {
  console.log("Connected to Server");
});

// 소켓이 서버로부터 끊꼈을 때
ws.addEventListener("close", () => {
  console.log("Disconnected from the Server");
});

// 서버로부터 데이터 수신
ws.addEventListener("message", (message) => {
  console.log(message.data);
});

// 데이터 발신
setTimeout(() => {
  ws.send("Message (hello world) from clicent");
}, 2000);
