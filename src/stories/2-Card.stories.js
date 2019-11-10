import React from "react";
import Card from "../Components/Card";
import { action } from "@storybook/addon-actions";

export default {
  title: "Card"
};

export const text = () => (
  <Card Value={3} Color={"blue"} onClick={action("clicked")} />
);
