import { UserState } from '..';
import { Actions, USER_RENAME, USER_VOTE } from '../Actions/types';

export const initialUserState: UserState = {
    users: [],
};

export function userReducer(state = initialUserState, action: Actions): UserState {
    switch (action.type) {
        case USER_RENAME:
            return {
                ...state,
            };
        case USER_VOTE:
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default userReducer;
