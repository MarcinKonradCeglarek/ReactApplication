import { Requests } from 'src/store/actions/types';

export default function(socket: SocketIOClient.Socket) {
    var channelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'action';

    return function(store: any) {
        socket.on(channelName, store.dispatch);

        return function(next: any) {
            return function(action: Requests) {
                if (action.isRequest) {
                    socket.emit(channelName, action);
                }

                return next(action);
            };
        };
    };
}
