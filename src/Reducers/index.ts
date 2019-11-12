import { StoreState } from "../Model";
import { StoryReveal, StoryReset } from "../Actions";
import { ReducerFactory } from "redux-actions-ts-reducer";
import { Reducer, Action } from "redux";
import { initialStoreState } from "../Store";

const RootReducer: Reducer<StoreState, Action<any>> = new ReducerFactory(
  initialStoreState
)
  .addReducer(StoryReveal, (state, action) => {
    return {
      ...state,
      story: { ...state.story, IsVoteRevealed: action.payload }
    };
  })
  .addReducer(
    StoryReset,
    (state: StoreState, action: Action): StoreState => {
      return {
        ...state,
        story: {
          Title: "",
          Result: null,
          IsVoteRevealed: false
        }
      };
    }
  )
  .toReducer();

export default RootReducer;
