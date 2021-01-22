import styled from "styled-components";

export const Main = styled.main`
  display: flex;

  min-height: 91vh;

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
  }

  label {
    @media only screen and (max-width: 767px) {
      color: #fff;
    }
  }

  button {
    margin-top: 1.5em;
    min-width: 10em;

    @media only screen and (max-width: 767px) {
      background-color: #fff;

      color: ${(props) => props.theme.primary.font.color};
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 3em 1em;
    width: 100%;
  }
`;

export const Title = styled.h1`
  @media only screen and (max-width: 767px) {
    color: #fff;
  }
`;

export const SubTitle = styled.h2`
  @media only screen and (max-width: 767px) {
    color: #fff;
  }
`;

export const Notification = styled.div`
  padding: 1em;

  background-color: ${(props) => props.theme.secondary.background};
  border-radius: 0.5em;

  color: #fff;
`;
