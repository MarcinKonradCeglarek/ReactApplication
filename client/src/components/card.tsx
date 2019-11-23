import React from 'react';
import classNames from 'classnames';
import { Theme } from '@material-ui/core';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
    createStyles({
        card: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.primary.contrastText,
            borderWidth: theme.spacing(1),
            borderStyle: 'solid',
            borderColor: theme.palette.primary.contrastText,
            borderRadius: theme.shape.borderRadius,
            cursor: 'pointer',
            margin: theme.spacing(1),
            transition: 'all 0.3s',
        },
        normal: {
            width: '150px',
            height: '200px',
            backgroundColor: theme.palette.primary.main,
        },
        selected: {
            marginTop: '-190px',
            width: '150px',
            height: '200px',
            backgroundColor: theme.palette.secondary.main,
        },
        value: {
            fontSize: '6rem',
        },
    });

export interface CardProps extends WithStyles<typeof styles, true> {
    Value: number;
    IsSelected: boolean;
    onClick: (value: number) => void;
}

class Card extends React.PureComponent<CardProps> {
    handleClick = () => {
        this.props.onClick(this.props.Value);
    };

    render() {
        const classes = this.props.classes;
        var wrapperClasses = classNames({
            [classes.card]: true,
            [classes.selected]: this.props.IsSelected,
            [classes.normal]: !this.props.IsSelected,
        });

        return (
            <div className={wrapperClasses} onClick={this.handleClick}>
                <span className={classes.value}>{this.props.Value}</span>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Card);
