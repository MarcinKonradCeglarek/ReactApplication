var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(80);
// WARNING: app.listen(80) will NOT work here!

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  console.log("Connected: " + socket.client.conn.id);
  socket.on("action", function(payload) {
    delete payload.isRequest;
    console.log(payload);
    socket.broadcast.emit("action", payload);
    socket.emit("action", payload);
  });
});

module.exports = app;
