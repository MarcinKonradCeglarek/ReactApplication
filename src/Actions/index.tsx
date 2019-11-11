import * as Constants from "./Constants";
import { createAction } from "redux-actions";

// *****
export interface UserVote {
  id: string;
  vote: number | null;
}
export const UserVote = createAction<UserVote, string, number>(
  Constants.USER_VOTE,
  (id: string, vote: number | null) => {
    return { id, vote };
  }
);

// *****
export interface UserRename {
  id: string;
  newName: string;
}
export const UserRename = createAction<UserRename, string, string>(
  Constants.USER_RENAME,
  (id: string, newName: string) => {
    return { id, newName };
  }
);

// *****
export interface StoryReveal {
  isRevealed: boolean;
}
export const StoryReveal = createAction<boolean>(
  Constants.STORY_REVEAL,
  () => true
);

// *****
export interface StoryReset {}
export const StoryReset = createAction(Constants.STORY_REVEAL, () => {});
