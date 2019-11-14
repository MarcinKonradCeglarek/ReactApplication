import { StoryState } from '..';
import { Actions, STORY_REVEAL, STORY_RESET, STORY_RENAME } from '../Actions/types';

export const initialStoryState: StoryState = {
    Title: '',
    Result: null,
    IsVoteRevealed: false,
};

export function storyReducer(state = initialStoryState, action: Actions): StoryState {
    console.log(state, action);
    switch (action.type) {
        case STORY_REVEAL:
            return {
                ...state,
                IsVoteRevealed: action.isRevealed,
            };
        case STORY_RESET:
            return {
                Title: '',
                Result: null,
                IsVoteRevealed: false,
            };
        case STORY_RENAME:
            return {
                ...state,
                Title: action.newTitle,
            };
        default:
            return state;
    }
}

export default storyReducer;
