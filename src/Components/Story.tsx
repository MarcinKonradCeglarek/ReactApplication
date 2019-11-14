import React from 'react';
import { Theme, Button } from '@material-ui/core';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import User from './User';
import { UserData } from '../Store';

const styles = (theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
        },
        userWrapper: {
            display: 'flex',
        },
        button: {
            marginLeft: '8px',
        },
    });

export interface StoryProps {
    Title: string;
    IsVoteRevealed: boolean;
    Users: UserData[];
    CurrentUsername: string;
}

export interface StoryDispatch {
    StoryReveal: () => void;
    StoryReset: () => void;
    StoryRename: (newName: string) => void;
    UserRename: (newName: string) => void;
}

class Story extends React.PureComponent<StoryProps & StoryDispatch & WithStyles<typeof styles, true>> {
    handleVote(Id: string, value: number): void {
        throw new Error('Method not implemented.');
    }

    renameUser = () => {
        let newUsername = prompt('Enter new username', this.props.CurrentUsername);
        if (newUsername != null) {
            this.props.UserRename(newUsername);
        }
    };

    renameStory = () => {
        let newTitle = prompt('Enter new story title', this.props.Title);
        if (newTitle != null) {
            this.props.StoryRename(newTitle);
        }
    };

    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.wrapper}>
                <div>
                    <h2>{this.props.Title}&nbsp;</h2>
                </div>

                <div>
                    <Button className={classes.button} variant="contained" color="primary" onClick={this.renameStory}>
                        Set title
                    </Button>
                    <Button className={classes.button} variant="contained" color="primary" onClick={this.renameUser}>
                        Change user
                    </Button>
                    <Button className={classes.button} variant="contained" color="primary" onClick={this.props.StoryReveal}>
                        Reveal
                    </Button>
                    <Button className={classes.button} variant="contained" color="primary" onClick={this.props.StoryReset}>
                        Reset
                    </Button>
                </div>

                <div className={classes.userWrapper}>
                    {this.props.Users.map(u => (
                        <User
                            key={`User_${u.Id}`}
                            Id={u.Id}
                            Name={u.Name}
                            Vote={u.Vote}
                            IsVoteRevealed={this.props.IsVoteRevealed}
                            SetVote={value => this.handleVote(u.Id, value)}
                        ></User>
                    ))}
                </div>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Story);
