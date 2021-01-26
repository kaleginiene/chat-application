import styled from "styled-components";

export const Main = styled.main`
  display: flex;

  min-height: 100vh;

  @media only screen and (max-width: 767px) {
    display: block;

    background-color: ${(props) => props.theme.primary.background};
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;

  text-align: center;
  background-color: #fff;

  &&:first-child {
    background-color: ${(props) => props.theme.primary.background};

    @media only screen and (max-width: 767px) {
      display: none;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      width: 30%;
    }
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    background-color: ${(props) => props.theme.primary.background};

    color: ${(props) => props.theme.primary.font.color};
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 70%;
  }
`;

export const Form = styled.form`
  padding: 0 5em;
  width: 60%;

  input,
  button {
    padding: 1em;

    font-size: 1.2em;

    box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  }

  button {
    margin-top: 1.5em;
    min-width: 10em;
    background-color: ${(props) => props.theme.secondary.background};
  }

  @media only screen and (max-width: 1024px) {
    padding: 3em 2em;
    width: 100%;
  }
`;

export const Title = styled.h1``;

export const SubTitle = styled.h2`
  @media only screen and (max-width: 767px) {
    color: #fff;
  }
`;

export const Notification = styled.div`
  padding: 1em;
  margin-bottom: 1.5em;

  background-color: ${(props) => props.theme.secondary.background};
  border-radius: 0.5em;

  color: #fff;
`;
