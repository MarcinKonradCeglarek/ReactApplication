import React from 'react';
import { Theme } from '@material-ui/core';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { orange, blue } from '@material-ui/core/colors';
import classnames from 'classnames';

const styles = (theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.common.white,
            backgroundColor: blue[500],
            border: '2px solid ' + theme.palette.common.white,
            borderRadius: theme.shape.borderRadius,
            margin: '5px',
            width: '150px',
            height: '50px',
        },
        myUser: {
            backgroundColor: orange[500],
        },
    });

export interface UserProps extends WithStyles<typeof styles, true> {
    Id: string;
    Name: string;
    Vote: number | null;
    IsVoteRevealed: boolean;
    IsMe: boolean;
}

class Card extends React.PureComponent<UserProps> {
    render() {
        const classes = this.props.classes;

        const vote = this.props.Vote ? (this.props.IsVoteRevealed ? this.props.Vote : '!!!') : '...';

        return (
            <div className={classnames({ [classes.wrapper]: true, [classes.myUser]: this.props.IsMe })}>
                <h3>
                    {this.props.Name}: {vote}
                </h3>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Card);
