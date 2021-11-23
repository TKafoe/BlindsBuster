const { Server } = require('ws');

const wss = new Server({ port:8080 });

wss.on('connection', (ws) => {
  console.log(ws);
  console.log('Client connected.');

  ws.on('close', () => console.log('Client disconnected.'));
});

setInterval(() => {
    wss.clients.forEach((client) => {
      console.log("Sending message...");
      client.send();
    });
}, 1000);
