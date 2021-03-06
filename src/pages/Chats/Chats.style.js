import styled from "styled-components";
import { ExitIcon, PlusIcon, PlusIconHover } from "../../assets";

export const Main = styled.main`
  position: relative;
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
`;

export const Logout = styled.img`
  position: absolute;

  width: 1.2em;
  top: 0.7em;
  right: 0.7em;

  object-fit: cover;
  cursor: pointer;
  z-index: 9;
`;

export const SideBar = styled.aside`
  padding: 0 2em 1em 0;
  padding-right: 2em;
  width: 35%;
  height: 80vh;
  box-sizing: border-box;

  @media only screen and (max-width: 767px) {
    padding: 0;
    width: 100%;
    height: fit-content;

    border-radius: 0;

    background-color: ${(props) =>
      props.vanishMode === "true"
        ? props.theme.primary.background
        : "transparent"};
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

export const FlexBlock = styled.div`
  display: flex;
  align-items: center;

  padding: 0.2em;

  font-size: 0.8em;

  cursor: pointer;

  @media only screen and (max-width: 767px) {
    justify-content: center;
  }
`;

export const AddChat = styled.img`
  margin-right: 0.5em;
  width: 2em;

  object-fit: cover;
  cursor: pointer;
`;

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 0 1em 1em 1em;
  width: 100%;
  height: ${(props) => (props.vanishMode ? "70vh" : "100%")};
  box-sizing: border-box;

  background-color: ${(props) => props.theme.primary.background};
  border: ${(props) => (props.vanishMode ? "2px solid #cbdaef" : "none")};
  border-radius: 1em;

  @media only screen and (max-width: 767px) {
    display: ${(props) => (props.display !== null ? "flex" : "none")};
    flex-direction: column;

    margin-top: 1.5em;
    height: fit-content;
    min-height: 78vh;

    padding: 0 0 1em 0;
    border-radius: 0;
  }
`;

export const Block = styled.div`
  &&.aside {
    height: 64%;
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

export const Icon = styled.div`
  margin: 0 auto;
  width: 2em;
  height: 2em;

  object-fit: cover;

  background-image: url(${PlusIcon});
  background-size: cover;

  &&:hover {
    background-image: url(${PlusIconHover});
  }
  cursor: pointer;

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const Picture = styled.img`
  width: 100%;
  max-height: 55vh;

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

  padding: 1em 1em;

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

    margin: 0 0 0 0.5em;
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

  overflow-anchor: none;

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

export const Exit = styled.div`
  position: absolute;
  width: 1em;
  height: 1em;
  top: 0.5em;
  right: 0.5em;

  background-image: url(${ExitIcon});
  background-size: cover;

  cursor: pointer;
`;
