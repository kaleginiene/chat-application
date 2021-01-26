import { storiesOf } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import ImageUploader from "./ImageUploader";

storiesOf("Image-uploader", module).add("uploader-block", () => (
  <ThemeProvider theme={theme}>
    <ImageUploader />
  </ThemeProvider>
));
