import socketIO from 'socket.io-client';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import storyReducer, { initialStoryState } from './Reducers/storyReducer';
import userReducer, { initialUserState } from './Reducers/userReducer';
import socketIoMiddleware from './Middleware/SocketsIoMiddleware';
import logger from 'redux-logger';

export type Id = string;

export interface StoryState {
    Title: string;
    Result: number | null;
    IsVoteRevealed: boolean;
}

export interface UserData {
    id: Id;
    name: string;
    vote: number | null;
}

export interface UserState {
    currentUserId: Id;
    users: Array<UserData>;
}

export interface StoreState {
    story: StoryState;
    users: UserState;
}

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
