var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(80);
// WARNING: app.listen(80) will NOT work here!

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

let users = [];
let story = {
  Title: "(no title)",
  IsVoteRevealed: false
};

io.on("connection", function(socket) {
  console.log(
    "Connected: " +
      socket.client.conn.id +
      ". Sending " +
      users.length +
      " users and story"
  );
  socket.emit("action", { type: "USER_INIT", users: users });
  socket.emit("action", { type: "STORY_INIT", story: story });
  socket.on("action", function(payload) {
    switch (payload.type) {
      case "USER_CREATE":
        users.push({ id: payload.id, name: payload.name, vote: null });
        break;
      case "USER_DELETED":
        let deletedIndex = users.findIndex(u => u.id === payload.id);
        users = users.splice(deletedIndex, 1);
        break;
      case "USER_VOTE":
        let voteIndex = users.findIndex(u => u.id === payload.id);
        users[voteIndex].vote = payload.vote;
        break;
      case "USER_RENAME":
        let renameIndex = users.findIndex(u => u.id === payload.id);
        users[renameIndex].name = payload.newName;
        break;
      case "STORY_RENAME":
        story.Title = payload.newTitle;
        break;
      case "STORY_REVEAL":
        story.IsVoteRevealed = true;
        break;
      case "STORY_RESET":
        story = {
          Title: "(no title)",
          IsVoteRevealed: false
        };
        break;
    }
    delete payload.isRequest;
    console.log(payload);
    socket.broadcast.emit("action", payload);
    socket.emit("action", payload);
  });
});

module.exports = app;
