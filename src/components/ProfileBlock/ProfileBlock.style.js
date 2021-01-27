import styled from "styled-components";
import { EditIcon, EditIconHover } from "../../assets";

export const Block = styled.div`
  position: relative;

  padding: 1em;
  max-height: 30%;
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);

  background-color: ${(props) => props.theme.primary.background};
  border-radius: 1em;
  border: 2px solid #cbdaef;

  text-align: center;

  @media only screen and (max-width: 767px) {
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 9;

    padding: 0.3em 1em;
    width: 100%;
    top: 0;
    box-sizing: border-box;

    background-color: ${(props) => props.theme.secondary.background};
    border-radius: 0;
    border: none;
  }
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
  width: 5em;
  height: 5em;
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);

  border-radius: 100%;
  background-color: #fff;

  object-fit: cover;

  @media only screen and (max-width: 767px) {
    margin-right: 2em;
    width: 3em;
    height: 3em;
  }
`;

export const Title = styled.h4`
  margin-bottom: 0;

  @media only screen and (max-width: 767px) {
    margin-top: 0;

    color: ${(props) => props.theme.secondary.font.color};
  }
`;

export const Subtitle = styled.h5`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
