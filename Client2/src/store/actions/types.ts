import { Id, UserData, StoryState } from '..';

interface BroadcastableAction {
    isRequest: true;
}

export const USER_INIT = 'USER_INIT';
interface UserListResponse {
    type: typeof USER_INIT;
    users: UserData[];
}

// *****
export const USER_VOTE = 'USER_VOTE';
interface UserVoteAction {
    type: typeof USER_VOTE;
    id: Id;
    vote: number;
}
interface UserVoteRequest extends UserVoteAction, BroadcastableAction {}
interface UserVoteResponse extends UserVoteAction {}

// *****
export const USER_RENAME = 'USER_RENAME';
interface UserRenameAction {
    type: typeof USER_RENAME;
    id: Id;
    newName: string;
}

interface UserRenameRequest extends UserRenameAction, BroadcastableAction {}
interface UserRenameResponse extends UserRenameAction {}

// *****
export const USER_CREATE = 'USER_CREATE';
interface UserCreateAction {
    type: typeof USER_CREATE;
    id: Id;
    name: string;
}

interface UserCreateRequest extends UserCreateAction, BroadcastableAction {}
interface UserCreateResponse extends UserCreateAction {}

// *****
export const USER_DELETE = 'USER_DELETE';
interface UserDeleteAction {
    type: typeof USER_DELETE;
    id: Id;
}

interface UserDeleteRequest extends UserDeleteAction, BroadcastableAction {}
interface UserDeleteResponse extends UserDeleteAction {}

export const STORY_INIT = 'STORY_INIT';
interface StoryInitResponse {
    type: typeof STORY_INIT;
    story: StoryState;
}

// *****
export const STORY_REVEAL = 'STORY_REVEAL';
interface StoryRevealAction {
    type: typeof STORY_REVEAL;
    isRevealed: boolean;
}

interface StoryRevealRequest extends StoryRevealAction, BroadcastableAction {}
interface StoryRevealResponse extends StoryRevealAction {}

// *****
export const STORY_RESET = 'STORY_RESET';
interface StoryResetAction {
    type: typeof STORY_RESET;
}

interface StoryResetRequest extends StoryResetAction, BroadcastableAction {}
interface StoryResetResponse extends StoryResetAction {}

// *****
export const STORY_RENAME = 'STORY_RENAME';
interface StoryRenameAction {
    type: typeof STORY_RENAME;
    newTitle: string;
}

interface StoryRenameRequest extends StoryRenameAction, BroadcastableAction {}
interface StoryRenameResponse extends StoryRenameAction {}

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
