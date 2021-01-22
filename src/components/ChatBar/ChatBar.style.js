import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  align-items: center;

  padding: 0.5em 1em;
  height: 5em;

  border-bottom: 1px solid ${(props) => props.theme.chat.backgroundIn};
  cursor: pointer;
`;

export const Picture = styled.img`
  margin-right: 1em;
  width: 5em;
  height: 5em;

  border-radius: 100%;

  object-fit: cover;
`;

export const Wrapper = styled.div`
  padding: 2em 0;
  width: calc(
    100% - 5em - 1em
  ); //width is 100% minus margin and width of the picture

  text-align: center;
`;

export const Title = styled.h3`
  margin-bottom: 0.5em;

  font-size: 0.9em;
`;

export const LastMessage = styled.p`
  margin: 0;
  max-height: 3em;
  overflow: hidden;

  text-overflow: ellipsis;
  white-space: nowrap;

  text-align: justify;
  font-size: 0.7em;
`;
