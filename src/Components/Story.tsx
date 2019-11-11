import React from "react";
import { Theme, Button } from "@material-ui/core";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import User from "./User";
import { UserData } from "../Model";

const styles = (theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      flexDirection: "column"
    },
    userWrapper: {
      display: "flex"
    },
    button: {
      marginLeft: "8px"
    }
  });

export interface StoryProps extends WithStyles<typeof styles, true> {
  Title: string;
  IsVoteRevealed: boolean;
  IsAdmin: boolean;
  Users: Array<UserData>;
}

class Story extends React.PureComponent<StoryProps> {
  handleVote(Id: string, value: number): void {
    throw new Error("Method not implemented.");
  }

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.wrapper}>
        <div>
          <h2>{this.props.Title}</h2>
        </div>

        {this.props.IsAdmin && (
          <div>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Reveal
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Reset
            </Button>
          </div>
        )}

        <div className={classes.userWrapper}>
          {this.props.Users.map(u => (
            <User
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
