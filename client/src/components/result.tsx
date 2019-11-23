import React from 'react';
import { Theme } from '@material-ui/core';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { UserData } from 'src/store/model';

const styles = (theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            width: '100px',
            border: '3px solid white',
            borderRadius: '5px',
        },
        result: {
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
                <h3 className={classes.result}>{result}</h3>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Result);
