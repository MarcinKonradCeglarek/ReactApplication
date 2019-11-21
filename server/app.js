var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server, {
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false,
});

server.listen(80);
// WARNING: app.listen(80) will NOT work here!

let users = [];
let story = {
    Title: '(no title)',
    IsVoteRevealed: false,
};

function updateServerState(payload, clientId) {
    switch (payload.type) {
        case 'USER_CREATE':
            payload.id = clientId;
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

    socket.on('disconnect', function() {
        const id = socket.client.conn.id;
        console.log('Disconnected: ' + id);
        let deletedIndex = users.findIndex(u => u.id === id);
        users = users.splice(deletedIndex, 1);
        socket.broadcast.emit('action', { type: 'USER_DELETE_RESPONSE', id: id });
    });

    socket.on('action', function(payload) {
        console.log(payload);

        updateServerState(payload, socket.client.conn.id);
        payload.type += '_RESPONSE';

        // broadcast to everyone but client
        socket.broadcast.emit('action', payload);

        // broadcast to client
        socket.emit('action', payload);
    });
});

module.exports = app;
