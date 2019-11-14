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
export const USER_CREATE = 'USER_CREATE';
interface UserCreate {
    type: typeof USER_CREATE;
    id: string;
    name: string;
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

// *****
export const STORY_RENAME = 'STORY_RENAME';
interface StoryRename {
    type: typeof STORY_RENAME;
    newTitle: string;
}

export type Actions = UserVoteAction | UserRename | UserCreate | StoryReveal | StoryReset | StoryRename;
