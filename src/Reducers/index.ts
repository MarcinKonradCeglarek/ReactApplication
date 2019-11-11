import { StoreState } from "../Model";
import { StoryReveal, StoryReset } from "../Actions";
import { ReducerFactory } from "redux-actions-ts-reducer";

const initialState: StoreState = {
  story: {
    Title: "",
    Result: null,
    IsVoteRevealed: false
  },
  users: []
};

const Reducer = new ReducerFactory(initialState)
  .addReducer(StoryReveal, (state, action) => {
    return {
      ...state,
      story: { ...state.story, IsVoteRevealed: action.payload }
    };
  })
  .addReducer(StoryReset, (state, action) => {
    return {
      ...state,
      story: {
        Title: "",
        Result: null,
        IsVoteRevealed: false
      }
    };
  })
  .toReducer();

export default Reducer;
