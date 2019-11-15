import { StoryState } from '..';
import { STORY_REVEAL, STORY_RESET, STORY_RENAME, Responses } from '../Actions/types';

export const initialStoryState: StoryState = {
    Title: '(no title)',
    Result: null,
    IsVoteRevealed: false,
};

export function storyReducer(state = initialStoryState, action: Responses): StoryState {
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
