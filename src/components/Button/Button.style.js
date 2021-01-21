import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5em 2em;

  background: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};

  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.font.color
      : props.theme.secondary.font.color};
  outline: none;

  border: none;
  border-radius: 0.5em;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.hover.background
        : props.theme.secondary.hover.background};

    color: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.font.color
        : props.theme.secondary.font.color};
  }

  &:focus {
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.focus.background
        : props.theme.secondary.focus.background};
  }
`;
