import { StoryState } from '..';
import { Actions, STORY_REVEAL, STORY_RESET } from '../Actions/types';

export const initialStoryState: StoryState = {
    Title: '',
    Result: null,
    IsVoteRevealed: false,
};

export function storyReducer(state = initialStoryState, action: Actions): StoryState {
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
        default:
            return state;
    }
}

export default storyReducer;
