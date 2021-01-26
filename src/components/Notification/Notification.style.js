import styled from "styled-components";
import ExitIcon from "../../assets/exit.svg";
import ExitHover from "../../assets/exithover.svg";

export const Notification = styled.div`
  position: relative;

  padding: 1em;
  margin-bottom: 1.5em;

  background-color: ${(props) => props.theme.secondary.background};
  border-radius: 0.5em;

  color: #fff;
`;

export const Exit = styled.div`
  position: absolute;
  width: 1em;
  height: 1em;
  top: 0.5em;
  right: 0.5em;

  background-image: url(${ExitIcon});
  background-size: cover;

  &&:hover {
    background-image: url(${ExitHover});
  }

  cursor: pointer;
`;
