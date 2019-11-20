import { Requests, USER_VOTE, USER_RENAME, STORY_REVEAL, STORY_RESET, USER_CREATE, STORY_RENAME, USER_DELETE } from './types';
import { Id } from '../model';

export function UserVoteRequest(id: Id, vote: number): Requests {
    return {
        type: USER_VOTE,
        id: id,
        vote: vote,
    };
}

export function UserRenameRequest(id: Id, newName: string): Requests {
    return {
        type: USER_RENAME,
        id: id,
        newName: newName,
    };
}

export function UserCreateRequest(id: Id, name: string): Requests {
    return {
        type: USER_CREATE,
        id: id,
        name: name,
    };
}

export function UserDeleteRequest(id: Id): Requests {
    return {
        type: USER_DELETE,
        id: id,
    };
}

export function StoryRevealRequest(): Requests {
    return {
        type: STORY_REVEAL,
        isRevealed: true,
    };
}

export function StoryResetRequest(): Requests {
    return {
        type: STORY_RESET,
    };
}

export function StoryRenameRequest(newTitle: string): Requests {
    return {
        type: STORY_RENAME,
        newTitle: newTitle,
    };
}
