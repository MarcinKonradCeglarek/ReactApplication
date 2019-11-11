import React, { Component } from "react";
import { connect } from "react-redux";
import { StoreState } from "../Model";
import { StoryProps } from "../Components/Story";
import * as Actions from "../Actions";

class StoryContainer extends Component {}

function mapStateToProps(state: StoreState, prop: StoryProps) {
  return {
    Title: state.story.Title,
    IsVoteRevealed: state.story.IsVoteRevealed,
    IsAdmin: true,
    Users: state.users
  };
}

const mapDispatchToProps = {
  StoryReveal: Actions.StoryReveal,
  StoryReset: Actions.StoryReset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryContainer);
