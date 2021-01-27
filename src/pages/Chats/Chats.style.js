import styled from "styled-components";

export const Main = styled.main`
  display: flex;

  margin: 0 auto;
  margin-top: 2em;
  padding: 2em;
  width: 56em;
  max-width: 100%;
  height: 75vh;
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);

  background-color: #fff;
  border-radius: 1em;

  @media only screen and (max-width: 767px) {
    display: block;

    margin-top: 0;
    padding: 0.5em;
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
  }
`;

export const SideBar = styled.aside`
  padding-right: 2em;
  width: 35%;
  height: 75vh;
  box-sizing: border-box;

  @media only screen and (max-width: 767px) {
    padding: 0;
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.h3`
  font-size: 1em;
  text-align: center;
  font-weight: bold;
`;

export const Wrapper = styled.section`
  width: 65%;
  height: 75vh;
  box-sizing: border-box;
  position: relative;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 0 1em 1em 1em;
  width: 100%;
  height: 75vh;
  box-sizing: border-box;

  background-color: ${(props) => props.theme.primary.background};
  border-radius: 1em;

  @media only screen and (max-width: 767px) {
    display: ${(props) => (props.display !== null ? "block" : "none")};

    height: fit-content;
  }
`;

export const Block = styled.div`
  &&.aside {
    height: 20em;
    overflow-y: auto;

    //scrollbar design
    &&:-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: ${(props) => props.theme.primary.background};
    }

    &&::-webkit-scrollbar {
      width: 10px;
      background-color: ${(props) => props.theme.primary.background};
      border-radius: 0.5em;
    }

    &&::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.secondary.background};
      border: 2px solid ${(props) => props.theme.secondary.background};
      border-radius: 0.5em;
    }
  }
`;

export const Picture = styled.img`
  width: 100%;

  object-fit: cover;

  border-radius: 1em;
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

  &&.aside {
    height: 100%;
  }
  //scrollbar design
  &&:-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #eee;
  }

  &&::-webkit-scrollbar {
    width: 10px;
    background-color: #eee;
    border-radius: 0.5em;
  }

  &&::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.secondary.background};
    border: 2px solid ${(props) => props.theme.secondary.background};
    border-radius: 0.5em;
  }
`;
