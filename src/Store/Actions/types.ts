// *****
export const USER_VOTE = 'USER_VOTE';
interface UserVoteAction {
    type: typeof USER_VOTE;
    id: string;
    vote: number;
}

// *****
export const USER_RENAME = 'USER_RENAME';
interface UserRename {
    type: typeof USER_RENAME;
    id: string;
    newName: string;
}

// *****
export const STORY_REVEAL = 'STORY_REVEAL';
interface StoryReveal {
    type: typeof STORY_REVEAL;
    isRevealed: boolean;
}

// *****
export const STORY_RESET = 'STORY_RESET';
interface StoryReset {
    type: typeof STORY_RESET;
}

export type Actions = UserVoteAction | UserRename | StoryReveal | StoryReset;
