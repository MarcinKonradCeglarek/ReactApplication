import { createStore } from "redux";
import { StoreState } from "./Model";
import Reducer from "./Reducers";

const store = createStore<StoreState>(Reducer, {
  story: { Title: "", Result: null, IsVoteRevealed: false },
  users: []
});

export default store;
