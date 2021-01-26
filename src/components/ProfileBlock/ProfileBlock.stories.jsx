import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import ProfileBlock from "./ProfileBlock";
import DefaultPhoto from "../../assets/default.png";

storiesOf("Profile-block", module).add("Profile-block", () => (
  <ThemeProvider theme={theme}>
    <ProfileBlock
      handleClick={() => console.log("click")}
      imgUrl={DefaultPhoto}
      name="Name Surname"
      city="Vilnius"
    />
  </ThemeProvider>
));
