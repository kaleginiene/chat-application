import styled from "styled-components";
import { EditIcon, EditIconHover, EditMobile } from "../../assets";

export const Main = styled.main`
  display: flex;

  margin: 0 auto;
  margin-top: 2em;
  padding: 2em;
  width: 56em;
  max-width: 100%;
  min-height: 75vh;
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);

  background-color: #fff;
  border-radius: 1em;

  @media only screen and (max-width: 767px) {
    flex-direction: column;

    margin: 0;
    padding: 0;
    width: 100%;
    height: fit-content;
    min-height: 100vh;
    box-shadow: none;

    background-color: ${(props) => props.theme.primary.background};
    border-radius: 0;
  }
  @media only screen and (min-width: 1200px) {
    width: 70em;
    height: 80vh;
  }
`;

export const Wrapper = styled.div`
  width: 40%;

  @media only screen and (max-width: 767px) {
    width: 100%;
    height: fit-content;
  }
`;

export const Container = styled.form`
  position: relative;

  margin-left: 2em;
  padding: 1em;
  width: 60%;

  background-color: ${(props) => props.theme.primary.background};
  border: 2px solid #cbdaef;
  border-radius: 1em;

  text-align: center;

  input:disabled {
    background-color: #fff;
    border: ${(props) => props.theme.border};

    cursor: pointer;
  }
  input {
    border: 2px solid #1f344f;
  }

  @media only screen and (max-width: 767px) {
    position: inherit;
    margin: 0;
    width: 100%;
    height: auto;
    box-sizing: border-box;

    border-radius: 0;
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
    &&:hover {
      background-image: url(${EditMobile});
    }
  }
`;

export const Title = styled.h1``;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 100%;

  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

export const Box = styled.div`
  margin: 1em;
  padding: 0.5em;
  width: 4em;

  border: ${(props) => props.theme.border};
  border-radius: 0.5em;

  background-color: ${(props) =>
    props.gender === props.value ? props.theme.secondary.background : "#fff"};
  cursor: pointer;

  color: ${(props) =>
    props.gender === props.value
      ? props.theme.secondary.font.color
      : props.theme.primary.font.color};

  @media only screen and (max-width: 767px) {
    margin: 2em 0 0 0;
  }
`;

export const BackIcon = styled.img`
  position: absolute;
  width: 1.5em;
  bottom: 1em;
  left: 1em;

  object-fit: cover;
  cursor: pointer;
`;
