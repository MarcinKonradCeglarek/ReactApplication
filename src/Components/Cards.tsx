import React from "react";
import Card from "./Card";
import { Theme } from "@material-ui/core";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex"
    }
  });

export interface CardsProps extends WithStyles<typeof styles, true> {
  SelectedValue: number | null;
  onSelect: (newValue: number) => void;
}

class Cards extends React.Component<CardsProps> {
  handleCardSelection = (value: number) => {
    this.props.onSelect(value);
  };

  render() {
    const supportedNumbers = [1, 2, 3, 5, 8, 13];
    return (
      <div className={this.props.classes.wrapper}>
        {supportedNumbers.map(n => (
          <Card
            key={`Card_${n}`}
            Value={n}
            onClick={this.handleCardSelection.bind(this)}
            IsSelected={this.props.SelectedValue === n}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Cards);
