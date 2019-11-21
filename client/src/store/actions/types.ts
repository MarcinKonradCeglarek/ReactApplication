import { UserData, Id, StoryState } from '../model';

export const USER_INIT_RESPONSE = 'USER_INIT_RESPONSE';
interface UserListResponse {
    type: typeof USER_INIT_RESPONSE;
    users: UserData[];
    isRequest: false;
}

// *****
export const USER_VOTE = 'USER_VOTE';
interface UserVoteRequest {
    type: typeof USER_VOTE;
    id: Id;
    vote: number;
}

export const USER_VOTE_RESPONSE = 'USER_VOTE_RESPONSE';
interface UserVoteResponse {
    type: typeof USER_VOTE_RESPONSE;
    id: Id;
    vote: number;
}

// *****
export const USER_RENAME = 'USER_RENAME';
interface UserRenameRequest {
    type: typeof USER_RENAME;
    id: Id;
    newName: string;
}

export const USER_RENAME_RESPONSE = 'USER_RENAME_RESPONSE';
interface UserRenameResponse {
    type: typeof USER_RENAME_RESPONSE;
    id: Id;
    newName: string;
}

// *****
export const USER_CREATE = 'USER_CREATE';
interface UserCreateRequest {
    type: typeof USER_CREATE;
    name: string;
}

export const USER_CREATE_RESPONSE = 'USER_CREATE_RESPONSE';
interface UserCreateResponse {
    type: typeof USER_CREATE_RESPONSE;
    id: Id;
    name: string;
}

// *****
export const USER_DELETE = 'USER_DELETE';
interface UserDeleteRequest {
    type: typeof USER_DELETE;
    id: Id;
}

export const USER_DELETE_RESPONSE = 'USER_DELETE_RESPONSE';
interface UserDeleteResponse {
    type: typeof USER_DELETE_RESPONSE;
    id: Id;
}

// *****
export const STORY_INIT_RESPONSE = 'STORY_INIT_RESPONSE';
interface StoryInitResponse {
    type: typeof STORY_INIT_RESPONSE;
    story: StoryState;
}

// *****
export const STORY_REVEAL = 'STORY_REVEAL';
interface StoryRevealRequest {
    type: typeof STORY_REVEAL;
    isRevealed: boolean;
}

export const STORY_REVEAL_RESPONSE = 'STORY_REVEAL_RESPONSE';
interface StoryRevealResponse {
    type: typeof STORY_REVEAL_RESPONSE;
    isRevealed: boolean;
}

// *****
export const STORY_RESET = 'STORY_RESET';
interface StoryResetRequest {
    type: typeof STORY_RESET;
}

export const STORY_RESET_RESPONSE = 'STORY_RESET_RESPONSE';
interface StoryResetResponse {
    type: typeof STORY_RESET_RESPONSE;
}

// *****
export const STORY_RENAME = 'STORY_RENAME';
interface StoryRenameRequest {
    type: typeof STORY_RENAME;
    newTitle: string;
}

export const STORY_RENAME_RESPONSE = 'STORY_RENAME_RESPONSE';
interface StoryRenameResponse {
    type: typeof STORY_RENAME_RESPONSE;
    newTitle: string;
}

// *****
export type Requests =
    | UserVoteRequest
    | UserRenameRequest
    | UserCreateRequest
    | UserDeleteRequest
    | StoryRevealRequest
    | StoryResetRequest
    | StoryRenameRequest;

export type Responses =
    | UserListResponse
    | UserVoteResponse
    | UserRenameResponse
    | UserCreateResponse
    | UserDeleteResponse
    | StoryInitResponse
    | StoryRevealResponse
    | StoryResetResponse
    | StoryRenameResponse;
