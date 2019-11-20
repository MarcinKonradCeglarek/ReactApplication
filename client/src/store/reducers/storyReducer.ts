import { Responses, STORY_INIT_RESPONSE, STORY_REVEAL_RESPONSE, STORY_RESET_RESPONSE, STORY_RENAME_RESPONSE } from '../actions/types';
import { StoryState } from '../model';

export const initialStoryState: StoryState = {
    Title: '(no title)',
    IsVoteRevealed: false,
};

export function storyReducer(state = initialStoryState, action: Responses): StoryState {
    switch (action.type) {
        case STORY_INIT_RESPONSE:
            return action.story;
        case STORY_REVEAL_RESPONSE:
            return {
                ...state,
                IsVoteRevealed: action.isRevealed,
            };
        case STORY_RESET_RESPONSE:
            return {
                Title: '',
                IsVoteRevealed: false,
            };
        case STORY_RENAME_RESPONSE:
            return {
                ...state,
                Title: action.newTitle,
            };
        default:
            return state;
    }
}

export default storyReducer;
