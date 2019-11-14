import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState, UserData } from '../Store';
import { UserVote, UserCreate } from '../Store/Actions';
import Cards, { CardsProps } from '../Components/Cards';

interface StoryContainerProps {
    currentUserId: string;
    currentUser: UserData | undefined;
    VoteAction: typeof UserVote;
    CreateUserAction: typeof UserCreate;
}

class DeckContainer extends Component<CardsProps & StoryContainerProps> {
    onSelect = (newValue: number) => {
        this.props.VoteAction(this.props.currentUserId, newValue);
    };

    onComponentMount() {
        if (this.props.currentUser === undefined) {
            this.props.CreateUserAction(this.props.currentUserId, 'Bob');
        }
    }

    render() {
        return <Cards SelectedValue={this.props.SelectedValue} onSelect={this.onSelect}></Cards>;
    }
}

function mapStateToProps(state: StoreState, ownProps: StoryContainerProps) {
    const currentUserId = state.users.currentUserId;
    const currentUser = state.users.users.find(u => u.Id === currentUserId);

    return {
        currentUserId: currentUserId,
        currentUser: currentUser,
        SelectedValue: currentUser !== undefined ? currentUser.Vote : null,
    };
}

const mapDispatchToProps = {
    VoteAction: UserVote,
    CreateUserAction: UserCreate,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckContainer);
