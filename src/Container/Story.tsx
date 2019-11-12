import React, { Component } from "react";
import { connect } from "react-redux";
import { StoreState } from "../Model";
import Story, { StoryProps } from "../Components/Story";
import * as Actions from "../Actions";

interface StoryContainerProps {}

class StoryContainer extends Component<StoryProps> {
  render() {
    return (
      <Story
        Title={this.props.Title}
        IsVoteRevealed={this.props.IsVoteRevealed}
        Users={this.props.Users}
        IsAdmin={true}
      ></Story>
    );
  }
}

function mapStateToProps(state: StoreState, ownProps: StoryContainerProps) {
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
