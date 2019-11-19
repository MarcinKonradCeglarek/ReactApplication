import { UserState, UserData } from '..';
import { USER_RENAME, USER_VOTE, USER_CREATE, STORY_RESET, USER_DELETE, Responses, USER_INIT } from '../Actions/types';
import update from 'immutability-helper';

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

export const initialUserState: UserState = {
    currentUserId: uuidv4(),
    users: [],
};

export function userReducer(state = initialUserState, action: Responses): UserState {
    switch (action.type) {
        case USER_INIT:
            const existingUsers: UserData[] = update(state.users, { $push: action.users });
            return { ...state, users: existingUsers };
        case USER_RENAME:
            const newState = update(state, {
                users: {
                    $apply: (users: UserData[]) =>
                        users.map(user => {
                            if (user.id !== action.id) {
                                return user;
                            }

                            const updatedUser: UserData = {
                                ...user,
                                name: action.newName,
                            };

                            return updatedUser;
                        }),
                },
            });
            return newState;

        case USER_VOTE:
            if (!state.users.find(u => u.id === action.id)) {
                return state;
            }

            let userVoteIndex = state.users.findIndex(u => u.id === action.id);
            const userWithVote: UserData = update(state.users[userVoteIndex], { vote: { $set: action.vote } });
            const updatedUsers: UserData[] = update(state.users, {
                $splice: [[userVoteIndex, 1, userWithVote]],
            });
            return { ...state, users: updatedUsers };

        case USER_CREATE:
            if (state.users.find(u => u.id === action.id)) {
                return state;
            }

            const newUser: UserData = { id: action.id, name: action.name, vote: null };
            const newUsers = update(state.users, { $push: [newUser] });
            const newState2: UserState = { ...state, users: newUsers };
            return newState2;

        case USER_DELETE:
            if (!state.users.find(u => u.id === action.id)) {
                return state;
            }

            let userToRemoveIndex = state.users.findIndex(u => u.id === action.id);
            const usersWithoutUserToRemove: UserData[] = update(state.users, { $splice: [[userToRemoveIndex, 1]] });
            const newState3: UserState = { ...state, users: usersWithoutUserToRemove };
            return newState3;

        case STORY_RESET:
            const usersWithoutVotes: UserData[] = state.users.map(u => {
                return { id: u.id, name: u.name, vote: null };
            });
            return {
                ...state,
                users: usersWithoutVotes,
            };
        default:
            return state;
    }
}

export default userReducer;
