import React from "react";
import { Theme } from "@material-ui/core";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    card: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "150px",
      height: "200px",
      color: "white",
      backgroundColor: "blue",
      border: "8px solid white",
      borderRadius: "8px"
    },
    value: {
      fontSize: "6rem"
    }
  });

export interface Props extends WithStyles<typeof styles, true> {
  Color: string;
  Value: number;
}

class Card extends React.PureComponent<Props> {
  render() {
    return (
      <div className={this.props.classes.card}>
        <span className={this.props.classes.value}>{this.props.Value}</span>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Card);
