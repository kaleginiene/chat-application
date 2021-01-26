import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.5em;
  padding: 0.5em 0.5em;
  height: 5em;
  max-width: 100%;

  border-radius: 1em;
  cursor: pointer;

  &.active {
    background-color: ${(props) => props.theme.primary.background};
  }
`;

export const Picture = styled.img`
  margin-right: 1em;
  width: 4em;
  height: 4em;

  border-radius: 100%;

  object-fit: cover;
`;

export const Wrapper = styled.div`
  width: calc(
    100% - 5em - 1em
  ); //width is 100% minus margin and width of the picture
`;

export const Title = styled.h3`
  margin-bottom: 0.5em;

  font-size: 0.9em;
`;

export const LastMessage = styled.p`
  margin: 0;
  padding: 0.1em 0;
  overflow: hidden;

  text-overflow: ellipsis;
  white-space: nowrap;

  text-align: justify;
  font-size: 0.7em;
`;
