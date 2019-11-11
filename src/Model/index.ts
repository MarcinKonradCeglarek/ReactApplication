export interface StoryData {
  Title: string;
  Result: number | null;
  IsVoteRevealed: boolean;
}

export interface UserData {
  Id: string;
  Name: string;
  Vote: number | null;
}

export interface StoreState {
  story: StoryData;
  users: Array<UserData>;
}
