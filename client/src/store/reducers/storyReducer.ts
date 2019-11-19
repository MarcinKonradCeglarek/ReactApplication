import { StoryState } from '..';
import { STORY_REVEAL, STORY_RESET, STORY_RENAME, Responses, STORY_INIT } from '../actions/types';

export const initialStoryState: StoryState = {
    Title: '(no title)',
    IsVoteRevealed: false,
};

export function storyReducer(state = initialStoryState, action: Responses): StoryState {
    switch (action.type) {
        case STORY_INIT:
            return action.story;
        case STORY_REVEAL:
            return {
                ...state,
                IsVoteRevealed: action.isRevealed,
            };
        case STORY_RESET:
            return {
                Title: '',
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
