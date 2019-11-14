import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState, UserData } from '../Store';
import { UserVote, UserCreate } from '../Store/Actions';
import Cards from '../Components/Cards';

interface DeckContainerProps {
    currentUserId: string;
    currentUser: UserData | undefined;
    SelectedValue: number | null;
}

interface DeckContainerDispatch {
    VoteAction: typeof UserVote;
    CreateUserAction: typeof UserCreate;
}

class DeckContainer extends Component<DeckContainerProps & DeckContainerDispatch> {
    onSelect = (newValue: number) => {
        this.props.VoteAction(this.props.currentUserId, newValue);
    };

    componentDidMount() {
        if (this.props.currentUser === undefined) {
            this.props.CreateUserAction(this.props.currentUserId, 'Bob');
        }
    }

    render() {
        return <Cards SelectedValue={this.props.SelectedValue} onSelect={this.onSelect}></Cards>;
    }
}

function mapStateToProps(state: StoreState): DeckContainerProps {
    const currentUserId = state.users.currentUserId;
    const currentUser = state.users.users.find(u => u.Id === currentUserId);

    return {
        currentUserId: currentUserId,
        currentUser: currentUser,
        SelectedValue: currentUser !== undefined ? currentUser.Vote : null,
    };
}

const mapDispatchToProps: DeckContainerDispatch = {
    VoteAction: UserVote,
    CreateUserAction: UserCreate,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckContainer);
