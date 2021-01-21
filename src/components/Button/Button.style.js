import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5em 2em;

  background: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};

  color: ${(props) => props.theme.secondary.font.color};

  border: none;
  border-radius: 0.5em;
  outline: none;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.hover.background
        : props.theme.secondary.hover.background};
  }

  &:focus {
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.focus.background
        : props.theme.secondary.focus.background};
  }
`;
