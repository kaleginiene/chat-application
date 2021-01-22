import styled from "styled-components";

export const Header = styled.header`
  padding-top: 2em;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 0 auto;
  padding: 0.5em;
  width: 56em;
  box-sizing: border-box;

  background-color: ${(props) => props.theme.primary.background};
  border-radius: 0.5em 0.5em 0 0;

  text-align: right;
`;

export const Picture = styled.img`
  margin-right: 1em;
  width: 5em;
  height: 5em;

  border-radius: 100%;

  object-fit: cover;
`;

export const Bold = styled.span`
  font-weight: bold;
`;
