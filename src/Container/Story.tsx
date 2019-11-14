import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../Store';
import Story, { StoryProps } from '../Components/Story';
import { RevealStory, ResetStory } from '../Store/Actions';

interface StoryContainerProps {}

interface DashboardDispatch {
    StoryReveal: typeof RevealStory;
    StoryReset: typeof ResetStory;
}
class StoryContainer extends Component<StoryProps & DashboardDispatch> {
    render() {
        return (
            <Story
                Title={this.props.Title}
                IsVoteRevealed={this.props.IsVoteRevealed}
                Users={this.props.Users}
                StoryReset={this.props.StoryReset}
                StoryReveal={this.props.StoryReveal}
            ></Story>
        );
    }
}

function mapStateToProps(state: StoreState, ownProps: StoryContainerProps): StoryProps {
    return {
        Title: state.story.Title,
        IsVoteRevealed: state.story.IsVoteRevealed,
        Users: state.users.users,
    };
}

const mapDispatchToProps: DashboardDispatch = {
    StoryReveal: RevealStory,
    StoryReset: ResetStory,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoryContainer);
