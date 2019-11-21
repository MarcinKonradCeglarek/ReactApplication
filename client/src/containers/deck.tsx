import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserVoteRequest, UserCreateRequest } from '../store/actions';
import Cards from '../components/cards';
import { StoreState, UserData } from 'src/store/model';

interface DeckContainerProps {
    currentUserId: string | null;
    currentUser: UserData | undefined;
    SelectedValue: number | null;
}

interface DeckContainerDispatch {
    VoteAction: typeof UserVoteRequest;
    CreateUserAction: typeof UserCreateRequest;
}

class DeckContainer extends Component<DeckContainerProps & DeckContainerDispatch> {
    onSelect = (newValue: number) => {
        if (this.props.currentUserId != null) {
            this.props.VoteAction(this.props.currentUserId, newValue);
        }
    };

    componentDidMount() {
        if (this.props.currentUser === undefined) {
            this.props.CreateUserAction('Bob');
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

export default connect(mapStateToProps, mapDispatchToProps)(DeckContainer);
