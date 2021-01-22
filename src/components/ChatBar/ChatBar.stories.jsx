import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import ChatBar from "./ChatBar";

storiesOf("Chat-Bar", module).add("Chat-bar-block", () => (
  <ThemeProvider theme={theme}>
    <ChatBar
      chats={[
        {
          id: 1,
          user_id: 1,
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
        {
          id: 2,
          user_id: 2,
          messages: [
            {
              id: 1,
              user_id: 2,
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
              user_id: 2,
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
      users={[
        {
          id: 1,
          email: "freddie@email.com",
          name: "Freddie",
          surname: "Mercury",
          image:
            "https://cdn.britannica.com/38/200938-050-E22981D1/Freddie-Mercury-Live-Aid-Queen-Wembley-Stadium-July-13-1985.jpg",
          city: "London",
        },
        {
          id: 2,
          email: "michael@email.com",
          name: "Michael",
          surname: "Jackson",
          image:
            "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxMjkwNTYwMDEz/michael-jackson-pepsi-commercial-raw.jpg",
          city: "L.A.",
        },
      ]}
    />
  </ThemeProvider>
));
