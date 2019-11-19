import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import socketIO from 'socket.io-client';
import storyReducer, { initialStoryState } from './reducers/storyReducer';
import userReducer, { initialUserState } from './reducers/userReducer';
import socketIoMiddleware from './middleware/sockets.io-client';
import { StoreState } from './model';


const rootReducer = combineReducers({
    story: storyReducer,
    users: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const io = socketIO.connect(`http://localhost:80`);

export const initialState: StoreState = {
    story: initialStoryState,
    users: initialUserState,
};

export default function CreateStore() {
    return createStore(rootReducer, initialState, compose(applyMiddleware(socketIoMiddleware(io), logger)));
}
