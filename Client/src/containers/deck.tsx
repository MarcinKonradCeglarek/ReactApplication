import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState, UserData } from '../Store';
import { UserVoteRequest, UserCreateRequest } from '../Store/actions';
import Cards from '../components/cards';

interface DeckContainerProps {
    currentUserId: string;
    currentUser: UserData | undefined;
    SelectedValue: number | null;
}

interface DeckContainerDispatch {
    VoteAction: typeof UserVoteRequest;
    CreateUserAction: typeof UserCreateRequest;
}

class DeckContainer extends Component<DeckContainerProps & DeckContainerDispatch> {
    onSelect = (newValue: number) => {
        this.props.VoteAction(this.props.currentUserId, newValue);
    };

    componentDidMount() {
        if (this.props.currentUser === undefined) {
            this.props.CreateUserAction(this.props.currentUserId, this.props.currentUserId.substr(0, 8));
        }
    }

    render() {
        return <Cards SelectedValue={this.props.SelectedValue} onSelect={this.onSelect}></Cards>;
    }
}

function mapStateToProps(state: StoreState): DeckContainerProps {
    const currentUserId = state.users.currentUserId;
    const currentUser = state.users.users.find(u => u.id === currentUserId);

    return {
        currentUserId: currentUserId,
        currentUser: currentUser,
        SelectedValue: currentUser !== undefined ? currentUser.vote : null,
    };
}

const mapDispatchToProps: DeckContainerDispatch = {
    VoteAction: UserVoteRequest,
    CreateUserAction: UserCreateRequest,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckContainer);
