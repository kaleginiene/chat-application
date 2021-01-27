import styled from "styled-components";
import { EditIcon, EditIconHover, EditMobile } from "../../assets";

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
    display: flex;
    align-items: center;

    padding: 0.5em 1em;
    width: 100%;
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

  @media only screen and (max-width: 767px) {
    background-image: url(${EditMobile});
  }
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

export const MobBackBtn = styled.img`
  display: none;

  @media only screen and (max-width: 767px) {
    display: block;

    margin-right: 1em;
    width: 2em;
    height: 2em;

    object-fit: cover;
  }
`;
