import { createStore, Action } from "redux";
import { StoreState } from "./Model";
import Reducer from "./Reducers";

export const initialStoreState: StoreState = {
  story: {
    Title: "",
    Result: null,
    IsVoteRevealed: false
  },
  users: []
};

const store = createStore<StoreState, Action<any>, any, any>(
  Reducer,
  initialStoreState
);

export default store;
