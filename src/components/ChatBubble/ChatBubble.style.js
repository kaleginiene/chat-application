import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.type === "out"
      ? "flex-end"
      : "flex-start"}; //incomming messages aligned left, outcomming messages aligned right
  width: 100%;
`;

export const Block = styled.div`
  padding: 1em 1.5em;
  margin: 1em 0;
  width: fit-content;
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);

  border-radius: ${(props) =>
    props.type === "in" ? "0 2em 2em 2em" : "2em 0 2em 2em"};

  background-color: ${(
    props //background color depending on message type
  ) =>
    props.type === "in"
      ? props.theme.chat.backgroundIn
      : props.theme.chat.backgroundOut};

  font-family: "Quicksand", sans-serif;
  font-weight: ${(props) =>
    props.type === "in" ? "bold" : "normal"}; //incomming messages are bold
  color: ${(
    props //font color depending on type
  ) =>
    props.type === "out"
      ? props.theme.chat.colorOut
      : props.theme.chat.colorIn};
`;

export const Notification = styled.h4`
  text-align: center;

  @media only screen and (max-width: 767px) {
    min-height: 45vh;
  }
`;
