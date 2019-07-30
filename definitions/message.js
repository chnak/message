F.on('messenger.open', function(controller, client) {
    // open client
	console.log("open")
});

F.on('messenger.close', function(controller, client) {
    // disconnected client
	console.log("close")
});

F.on('messenger.data', function(controller, client, data) {
    // RAW data from websocket
    // data === OBJECT
	//console.log("data：",data)
});

F.on('messenger.message', function(controller, client, message) {
    // New message
    // message === OBJECT
	//console.log("收到：",message)
});