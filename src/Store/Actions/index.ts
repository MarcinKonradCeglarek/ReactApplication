import { Actions, USER_VOTE, USER_RENAME, STORY_REVEAL, STORY_RESET, USER_CREATE, STORY_RENAME, USER_DELETE } from './types';

export function VoteUser(id: string, vote: number): Actions {
    return {
        type: USER_VOTE,
        id: id,
        vote: vote,
    };
}

export function RenameUser(id: string, newName: string): Actions {
    return {
        type: USER_RENAME,
        id: id,
        newName: newName,
    };
}

export function RemoveUser(id: string): Actions {
    return {
        type: USER_DELETE,
        id: id,
    };
}

export function CreateUser(id: string, name: string): Actions {
    return {
        type: USER_CREATE,
        id: id,
        name: name,
    };
}

export function RevealStory(): Actions {
    return {
        type: STORY_REVEAL,
        isRevealed: true,
    };
}

export function ResetStory(): Actions {
    return {
        type: STORY_RESET,
    };
}

export function RenameStory(newTitle: string): Actions {
    return {
        type: STORY_RENAME,
        newTitle: newTitle,
    };
}
