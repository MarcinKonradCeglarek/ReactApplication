import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../Store';
import Story, { StoryProps } from '../Components/Story';
import { RevealStory, ResetStory, RenameUser, RenameStory } from '../Store/Actions';

interface DashboardProps extends StoryProps {
    CurrentUserId: string;
}

interface DashboardDispatch {
    StoryReveal: typeof RevealStory;
    StoryReset: typeof ResetStory;
    StoryRename: typeof RenameStory;
    UserRename: typeof RenameUser;
}
class Dashboard extends Component<DashboardProps & DashboardDispatch> {
    userRename = (newName: string) => {
        this.props.UserRename(this.props.CurrentUserId, newName);
    };

    render() {
        return (
            <Story
                Title={this.props.Title}
                IsVoteRevealed={this.props.IsVoteRevealed}
                Users={this.props.Users}
                CurrentUsername={this.props.CurrentUsername}
                StoryReset={this.props.StoryReset}
                StoryReveal={this.props.StoryReveal}
                UserRename={this.userRename}
                StoryRename={this.props.StoryRename}
            ></Story>
        );
    }
}

function mapStateToProps(state: StoreState): DashboardProps {
    const currentUserId = state.users.currentUserId;
    const currentUser = state.users.users.find(u => u.id === currentUserId);

    return {
        Title: state.story.Title,
        IsVoteRevealed: state.story.IsVoteRevealed,
        Users: state.users.users,
        CurrentUserId: currentUserId,
        CurrentUsername: currentUser ? currentUser.Name : '',
    };
}

const mapDispatchToProps: DashboardDispatch = {
    StoryReveal: RevealStory,
    StoryReset: ResetStory,
    StoryRename: RenameStory,
    UserRename: RenameUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
