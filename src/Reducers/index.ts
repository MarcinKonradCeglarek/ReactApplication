import { StoreState } from "../Model";
import { StoryReveal, StoryReset } from "../Actions";
import { ReducerFactory } from "redux-actions-ts-reducer";
import { Reducer, Action } from "redux";
import { initialStoreState } from "../Store";

const RootReducer: Reducer<StoreState, Action<any>> = new ReducerFactory(
  initialStoreState
)
  .addReducer(StoryReveal, (state: StoreState, action: Action<boolean>) => {
    return {
      ...state,
      story: { ...state.story, IsVoteRevealed: action.type }
    };
  })
  .addReducer(StoryReset, (state: StoreState, action: Action) => {
    return {
      ...state,
      story: {
        Title: "",
        Result: null,
        IsVoteRevealed: false
      }
    };
  });

export default RootReducer;
