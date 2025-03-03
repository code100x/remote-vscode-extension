const {WebSocket} = require("ws")

const ws = new WebSocket("ws://localhost:8082");

ws.onerror = () => {console.log("error")}

ws.ondata = () => {console.log("message")}
