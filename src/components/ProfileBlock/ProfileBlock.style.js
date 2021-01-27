import styled from "styled-components";
import { EditIcon, EditIconHover } from "../../assets";

export const Block = styled.div`
  position: relative;

  padding: 1em;

  background-color: ${(props) => props.theme.primary.background};
  border-radius: 1em;
  border: 2px solid #cbdaef;

  text-align: center;
`;

export const Edit = styled.div`
  position: absolute;
  width: 1.5em;
  height: 1.5em;
  top: 1em;
  right: 1em;

  background-image: url(${EditIcon});
  background-size: cover;

  &&:hover {
    background-image: url(${EditIconHover});
  }

  cursor: pointer;
`;

export const Picture = styled.img`
  width: 6em;
  height: 6em;
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);

  border-radius: 100%;

  object-fit: cover;

  background-color: #fff;
`;

export const Title = styled.h3``;

export const Subtitle = styled.h4``;
