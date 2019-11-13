import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../Store';
import Story, { StoryProps } from '../Components/Story';
import * as Actions from '../Store/Actions';

interface StoryContainerProps {}

class StoryContainer extends Component<StoryProps> {
    render() {
        return <Story {...this.props}></Story>;
    }
}

function mapStateToProps(state: StoreState, ownProps: StoryContainerProps): StoryProps {
    return {
        Title: state.story.Title,
        IsVoteRevealed: state.story.IsVoteRevealed,
        Users: state.users.users,
    };
}

const mapDispatchToProps = {
    StoryReveal: Actions.RevealStory,
    StoryReset: Actions.ResetStory,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoryContainer);
