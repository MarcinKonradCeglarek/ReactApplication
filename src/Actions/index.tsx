import * as Constants from "./Constants";
import { createAction } from "redux-actions";

// *****
export interface UserVoteResult {
  id: string;
  vote: number | null;
}
export const UserVote = createAction<UserVoteResult, string, number>(
  Constants.USER_VOTE,
  (id: string, vote: number | null) => {
    return { id, vote };
  }
);

// *****
export interface UserRenameResult {
  id: string;
  newName: string;
}
export const UserRename = createAction<UserRenameResult, string, string>(
  Constants.USER_RENAME,
  (id: string, newName: string) => {
    return { id, newName };
  }
);

// *****
export const StoryReveal = createAction<boolean>(
  Constants.STORY_REVEAL,
  () => true
);

// *****
export const StoryReset = createAction(Constants.STORY_REVEAL, () => {});
