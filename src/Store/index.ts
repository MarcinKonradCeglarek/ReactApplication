import { createStore, combineReducers } from 'redux';
import storyReducer, { initialStoryState } from './Reducers/storyReducer';
import userReducer, { initialUserState } from './Reducers/userReducer';

export interface StoryState {
    Title: string;
    Result: number | null;
    IsVoteRevealed: boolean;
}

export interface UserData {
    Id: string;
    Name: string;
    Vote: number | null;
}

export interface UserState {
    currentUserId: string;
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

const initialState: StoreState = {
    story: initialStoryState,
    users: initialUserState,
};

export default function CreateStore() {
    return createStore(rootReducer, initialState);
}
