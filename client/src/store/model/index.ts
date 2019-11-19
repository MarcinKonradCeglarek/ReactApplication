export type Id = string;

export interface StoryState {
    Title: string;
    IsVoteRevealed: boolean;
}

export interface UserData {
    id: Id;
    name: string;
    vote: number | null;
}

export interface UserState {
    currentUserId: Id;
    users: Array<UserData>;
}

export interface StoreState {
    story: StoryState;
    users: UserState;
}