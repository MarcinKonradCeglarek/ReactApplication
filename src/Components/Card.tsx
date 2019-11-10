import React from "react";
import classNames from "classnames";
import { Theme } from "@material-ui/core";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const styles = (theme: Theme) =>
  createStyles({
    card: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: theme.palette.common.white,
      backgroundColor: purple[500],
      border: "8px solid " + theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      cursor: "pointer",
      margin: "5px",
      transition: "width 0.3s, height 0.3s"
    },
    normal: {
      width: "150px",
      height: "200px"
    },
    selected: {
      width: "175px",
      height: "235px"
    },
    value: {
      fontSize: "6rem"
    }
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
      [classes.normal]: !this.props.IsSelected
    });

    return (
      <div className={wrapperClasses} onClick={this.handleClick}>
        <span className={this.props.classes.value}>{this.props.Value}</span>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Card);
