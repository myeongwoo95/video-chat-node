const ws = new WebSocket(`ws://${window.location.host}`);
import { WebSoket } from "ws";

ws.addEventListener("open", () => {
  console.log("Connected to Server");
});

ws.addEventListener("message", (message) => {
  console.log(message.data);
});

ws.addEventListener("close", () => {
  console.log("Disconnected from the Server");
});

document.querySelector("button-call").addEventListener(() => {
  //ws.send("Message (hello world) from server");
  alert("test");
});
