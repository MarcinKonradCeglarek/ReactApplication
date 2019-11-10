import React from "react";
import Card from "./Card";
import { action } from "@storybook/addon-actions";

export default {
  title: "Card"
};

export const text = () => <Card onClick={action("clicked")}>Hello Button</Card>;
