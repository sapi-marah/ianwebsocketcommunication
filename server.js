const { WebSocketServer, WebSocket } = require('ws');
let wss = new WebSocketServer({ port : 3000 });
wss.on('connection', function(ws) {
	ws.on('message', function(message) {
		let msg = message.toString();
		wss.clients.forEach(function(client) {
			if (client.readyState === WebSocket.OPEN) {
				client.send(msg);
			}
		});
	});
});
