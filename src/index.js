import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { UserProvider } from "./contexts/UserContext";
import { ChatProvider } from "./contexts/ChatContext";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./theme";
import "normalize.css";

const GlobalBodyStyle = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.primary.background};

  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.theme.primary.font.color};
}
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalBodyStyle />
      <UserProvider>
        <ChatProvider>
          <Routes />
        </ChatProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
