import {
    Responses,
    USER_INIT_RESPONSE,
    USER_RENAME_RESPONSE,
    USER_VOTE_RESPONSE,
    USER_CREATE_RESPONSE,
    USER_DELETE_RESPONSE,
    STORY_RESET_RESPONSE,
} from '../actions/types';
import update from 'immutability-helper';
import { UserState, UserData, Id } from '../model';

export const initialUserState: UserState = {
    currentUserId: null,
    users: [],
};

function userExists(state: UserState, id: Id): boolean {
    let userIndex = state.users.findIndex(u => u.id === id);
    return userIndex !== -1;
}

export function userReducer(state = initialUserState, response: Responses): UserState {
    switch (response.type) {
        case USER_INIT_RESPONSE: {
            const existingUsers: UserData[] = update(state.users, { $push: response.users });
            return { ...state, users: existingUsers };
        }

        case USER_RENAME_RESPONSE: {
            let userIndex = state.users.findIndex(u => u.id === response.id);

            if (userIndex === -1) {
                return state;
            }

            const updatedUser: UserData = update(state.users[userIndex], { name: { $set: response.newName } });
            const updatedUsers: UserData[] = update(state.users, {
                $splice: [[userIndex, 1, updatedUser]],
            });
            return { ...state, users: updatedUsers };
        }

        case USER_VOTE_RESPONSE: {
            let userIndex = state.users.findIndex(u => u.id === response.id);

            if (userIndex === -1) {
                return state;
            }

            const updatedUser: UserData = update(state.users[userIndex], { vote: { $set: response.vote } });
            const updatedUsers: UserData[] = update(state.users, {
                $splice: [[userIndex, 1, updatedUser]],
            });
            return { ...state, users: updatedUsers };
        }

        case USER_CREATE_RESPONSE: {
            if (userExists(state, response.id)) {
                return state;
            }

            const newUser: UserData = { id: response.id, name: response.name, vote: null };
            const newUsers = update(state.users, { $push: [newUser] });

            if (state.currentUserId === null) {
                return { ...state, currentUserId: response.id, users: newUsers };
            } else {
                return { ...state, users: newUsers };
            }
        }

        case USER_DELETE_RESPONSE: {
            let userIndex = state.users.findIndex(u => u.id === response.id);

            if (userIndex === -1) {
                return state;
            }

            const updatedUsers: UserData[] = update(state.users, { $splice: [[userIndex, 1]] });
            return { ...state, users: updatedUsers };
        }

        case STORY_RESET_RESPONSE: {
            const updatedUsers: UserData[] = state.users.map(u => {
                return { id: u.id, name: u.name, vote: null };
            });

            return { ...state, users: updatedUsers };
        }

        default:
            return state;
    }
}

export default userReducer;
