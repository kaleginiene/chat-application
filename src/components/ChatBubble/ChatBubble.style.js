import styled from "styled-components";

export const Block = styled.div`
  padding: 1em 1.5em;
  margin: 1em 0;
  border-radius: ${(props) =>
    props.type === "in" ? "0 2em 2em 2em" : "2em 0 2em 2em"};

  background-color: ${(props) =>
    props.type === "in"
      ? props.theme.chat.backgroundIn
      : props.theme.chat.backgroundOut};

  font-size: 0.9em;
`;
