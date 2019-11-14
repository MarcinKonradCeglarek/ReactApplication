import { UserState, UserData } from '..';
import { Actions, USER_RENAME, USER_VOTE, USER_CREATE } from '../Actions/types';
import update from 'react-addons-update';

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

export function userReducer(state = initialUserState, action: Actions): UserState {
    console.log(state, action);
    switch (action.type) {
        case USER_RENAME:
            const newState = update(state, {
                users: {
                    $apply: (users: UserData[]) =>
                        users.map(user => {
                            if (user.Id !== action.id) {
                                return user;
                            }

                            const updatedUser: UserData = {
                                ...user,
                                Name: action.newName,
                            };

                            return updatedUser;
                        }),
                },
            });
            return newState;
        case USER_VOTE:
            if (!state.users.find(u => u.Id === state.currentUserId)) {
                return state;
            }

            var userIndex = state.users.findIndex(u => u.Id === action.id);
            var updatedUser: UserData = update(state.users[userIndex], { Vote: { $set: action.vote } });
            var updatedUsers: UserData[] = update(state.users, {
                $splice: [[userIndex, 1, updatedUser]],
            });

            return { ...state, users: updatedUsers };
        case USER_CREATE:
            if (state.users.find(u => u.Id === state.currentUserId)) {
                return state;
            }

            const newUser: UserData = { Id: state.currentUserId, Name: action.name, Vote: null };
            const newUsers = update(state.users, { $push: [newUser] });
            const newState2: UserState = { ...state, users: newUsers };
            return newState2;
        default:
            return state;
    }
}

export default userReducer;
