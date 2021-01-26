import { storiesOf } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import Notification from "./Notification";

storiesOf("Notification", module).add("primary-notification", () => (
  <ThemeProvider theme={theme}>
    <Notification notification="Demo notification here" />
  </ThemeProvider>
));
