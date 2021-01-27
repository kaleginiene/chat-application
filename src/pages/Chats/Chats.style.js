import styled from "styled-components";

export const Main = styled.main`
  display: flex;

  margin: 0 auto;
  margin-top: 2em;
  padding: 2em;
  width: 56em;
  max-width: 100%;
  height: 80vh;
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);

  background-color: #fff;
  border-radius: 1em;

  @media only screen and (max-width: 767px) {
    display: block;

    margin-top: 0;
    padding: 0;
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    box-shadow: none;

    border-radius: 0;
  }
  @media only screen and (min-width: 1200px) {
    width: 70em;
    height: 80vh;
  }
`;

export const SideBar = styled.aside`
  padding-right: 2em;
  width: 35%;
  height: 80vh;
  box-sizing: border-box;

  @media only screen and (max-width: 767px) {
    padding: 0;
    width: 100%;
    height: fit-content;

    border-radius: 0;
  }
`;

export const Title = styled.h3`
  font-size: 1em;
  text-align: center;
  font-weight: bold;
`;

export const Wrapper = styled.section`
  width: 65%;
  height: 80vh;
  box-sizing: border-box;
  position: relative;

  @media only screen and (max-width: 767px) {
    width: 100%;
    height: fit-content;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 0 1em 1em 1em;
  width: 100%;
  height: 80vh;
  box-sizing: border-box;

  background-color: ${(props) => props.theme.primary.background};
  border-radius: 1em;

  @media only screen and (max-width: 767px) {
    display: ${(props) => (props.display !== null ? "flex" : "none")};
    flex-direction: column;

    margin-top: 1.5em;
    height: fit-content;
    min-height: 90vh;

    padding: 0 0 1em 0;
    border-radius: 0;
  }
`;

export const Block = styled.div`
  &&.aside {
    height: 60%;
    overflow-y: auto;
    box-sizing: border-box;

    //scrollbar design
    &&:-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: ${(props) => props.theme.primary.background};
    }

    &&::-webkit-scrollbar {
      width: 0.4em;
      background-color: ${(props) => props.theme.primary.background};
      border-radius: 0.5em;
    }

    &&::-webkit-scrollbar-thumb {
      background-color: #d0def4;
      border-radius: 0.5em;
    }
  }
`;

export const Picture = styled.img`
  width: 100%;

  object-fit: cover;

  border-radius: 1em;

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0em 1em;

  background-color: #fff;
  border-radius: 1em;
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);

  input {
    margin-bottom: 0;
    box-sizing: border-box;

    border: 2px solid #cbdaef;

    @media only screen and (max-width: 767px) {
      margin: 0;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-left: 0.5em;
    padding: 0.65em 2em;
    width: 25%;

    @media only screen and (max-width: 767px) {
      display: none;
    }
  }
  label {
    margin: 0;
  }

  @media only screen and (max-width: 767px) {
    box-shadow: none;
    background-color: transparent;
  }
`;

export const SendIcon = styled.img`
  margin-left: 0.5em;
  height: 1em;

  object-fit: cover;

  &&.mobile {
    display: none;

    @media only screen and (max-width: 767px) {
      display: block;
      width: 1.5em;
      height: 1.5em;
    }
  }
`;

export const ScrollWrapper = styled.div`
  padding: 0.5em;
  overflow-y: auto;
  box-sizing: border-box;

  //scrollbar design
  &&:-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${(props) => props.theme.primary.background};
    margin-top: 0.2em;
  }

  &&::-webkit-scrollbar {
    width: 0.4em;
    background-color: ${(props) => props.theme.primary.background};
    border-radius: 0.5em;
  }

  &&::-webkit-scrollbar-thumb {
    background-color: #d0def4;
    border-radius: 0.5em;
  }
`;
