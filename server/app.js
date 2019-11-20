var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);
// WARNING: app.listen(80) will NOT work here!

let users = [];
let story = {
    Title: '(no title)',
    IsVoteRevealed: false,
};

function updateServerState(payload) {
    switch (payload.type) {
        case 'USER_CREATE':
            users.push({ id: payload.id, name: payload.name, vote: null });
            break;
        case 'USER_DELETE':
            let deletedIndex = users.findIndex(u => u.id === payload.id);
            users = users.splice(deletedIndex, 1);
            break;
        case 'USER_VOTE':
            let voteIndex = users.findIndex(u => u.id === payload.id);
            users[voteIndex].vote = payload.vote;
            break;
        case 'USER_RENAME':
            let renameIndex = users.findIndex(u => u.id === payload.id);
            users[renameIndex].name = payload.newName;
            break;
        case 'STORY_RENAME':
            story.Title = payload.newTitle;
            break;
        case 'STORY_REVEAL':
            story.IsVoteRevealed = true;
            break;
        case 'STORY_RESET':
            story = {
                Title: '(no title)',
                IsVoteRevealed: false,
            };

            users.forEach(u => {
                u.vote = null;
            });

            break;
    }
}
io.on('connection', function(socket) {
    console.log('Connected: ' + socket.client.conn.id + '. Sending ' + users.length + ' users and story');
    socket.emit('action', { type: 'USER_INIT_RESPONSE', users: users });
    socket.emit('action', { type: 'STORY_INIT_RESPONSE', story: story });
    socket.on('action', function(payload) {
        updateServerState(payload);

        // deleting isRequest property from incoming action before forwarding
        payload.type += '_RESPONSE';
        console.log(payload);

        // broadcast to everyone but client
        socket.broadcast.emit('action', payload);

        // broadcast to client
        socket.emit('action', payload);
    });
});

module.exports = app;
