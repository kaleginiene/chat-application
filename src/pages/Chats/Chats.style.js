import styled from "styled-components";

export const Main = styled.main`
  display: flex;

  margin: 0 auto;
  width: 56em;
  min-height: 80vh;
`;

export const SideBar = styled.aside`
  width: 35%;

  border: 1px solid ${(props) => props.theme.primary.background};
  border-right: none;
  border-radius: 0 0 0 0.5em;
`;

export const Title = styled.h3`
  font-size: 0.8em;
  text-align: center;
  font-weight: normal;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 1em;
  width: 65%;

  border: 1px solid ${(props) => props.theme.primary.background};
  border-left: 1px solid ${(props) => props.theme.chat.backgroundIn};
  border-radius: 0 0 0.5em 0;
`;

export const Form = styled.form``;
