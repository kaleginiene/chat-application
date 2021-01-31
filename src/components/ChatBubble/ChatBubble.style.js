import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.type === "out"
      ? "flex-end"
      : "flex-start"}; //incomming messages aligned left, outcomming messages aligned right
  align-items: center;

  max-width: 100%;
  box-sizing: border-box;
`;

export const Picture = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 100%;

  object-fit: cover;
`;

export const Block = styled.div`
  padding: 1em 1.5em;
  margin: 1em 1em;
  width: fit-content;
  max-width: calc(
    100% - 3em - 2em
  ); //width calcuulated 100% minus picture width and margins
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  border-radius: ${(props) =>
    props.type === "in"
      ? "0 2em 2em 2em"
      : "2em 0 2em 2em"}; //border radius depending on the message type

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
