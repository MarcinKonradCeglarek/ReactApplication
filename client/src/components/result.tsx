import React from 'react';
import { Theme } from '@material-ui/core';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { UserData } from 'src/store/model';

const styles = (theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: red[900],
            width: '100px',
            border: '3px solid white',
            borderRadius: '5px',
        },
        result: {
            color: theme.palette.common.white,
            fontSize: '1.5rem',
        },
    });

export interface ResultProps {
    Users: UserData[];
    IsVoteRevealed: boolean;
}

class Result extends React.PureComponent<ResultProps & WithStyles<typeof styles, true>> {
    render() {
        const classes = this.props.classes;
        const votes = this.props.Users.map(u => u.vote).filter(v => v != null) as number[];

        const result = this.props.IsVoteRevealed ? (votes.reduce((a, b) => a + b, 0) / votes.length).toFixed(1) : <HelpOutlineIcon />;

        return (
            <div className={classes.wrapper}>
                <div>
                    <h3 className={classes.result}>{result}</h3>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Result);
