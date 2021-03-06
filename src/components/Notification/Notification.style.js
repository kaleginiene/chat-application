import styled from "styled-components";
import { ExitIcon, ExitIconHover } from "../../assets";

export const Notification = styled.div`
  position: relative;

  padding: 1.5em;
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
    background-image: url(${ExitIconHover});
  }

  cursor: pointer;
`;
