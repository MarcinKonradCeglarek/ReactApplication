import React from "react";
import { storiesOf } from "@storybook/react";
import { withState } from "@dump247/storybook-state";

import Card from "../Components/Card";
import Cards from "../Components/Cards";
import { action } from "@storybook/addon-actions";

export default {
  title: "Card"
};

interface CardsProps {
  SelectedValue: number | null;
}

storiesOf("Cards", module)
  .add("Single card 3", () => (
    <Card
      Value={3}
      Color={"blue"}
      IsSelected={false}
      onClick={action("clicked")}
    />
  ))
  .add(
    "Multiple values with store",
    withState<CardsProps>({ SelectedValue: null })(({ store }) => (
      <Cards
        SelectedValue={store.state.SelectedValue}
        onSelect={value => store.set({ SelectedValue: value })}
      ></Cards>
    ))
  );
