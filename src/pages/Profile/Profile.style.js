import styled from "styled-components";
import { Link } from "react-router-dom";
import { EditIcon, EditIconHover } from "../../assets";

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
    display: block;

    margin: 0.5em;
    padding: 1em;
    width: 95%;
    height: fit-content;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    margin: 1em 0 0 0;
    width: 100%;
    height: auto;
    box-sizing: border-box;
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

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  text-align: left;
  text-decoration: none;
`;

export const BackIcon = styled.img`
  margin-right: 0.5em;
  width: 1.5em;

  object-fit: cover;
`;
