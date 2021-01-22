import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import ChatBubble from "./ChatBubble";

storiesOf("Chat-Bubble", module).add("bubbles", () => (
  <ThemeProvider theme={theme}>
    <ChatBubble
      chat={[
        {
          messages: [
            {
              id: 1,
              user_id: 1,
              text:
                "Is this the real life? Is this just fantasy? Caught in a landslide No escape from reality.",
            },
            {
              id: 2,
              user_id: "user",
              text:
                "Billie Jean Is Not My Lover, She's Just A Girl Who Claims That I Am The One",
            },
            {
              id: 3,
              user_id: 1,
              text:
                "I want to break free. I want to break free, I want to break free from your lies.",
            },
            {
              id: 4,
              user_id: "user",
              text:
                "But you are not alone. For I am here with you. Though we're far apart. You're always in my heart. But you are not alone",
            },
          ],
        },
      ]}
    />
  </ThemeProvider>
));
