import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.5em;
  margin-right: 0.5em;
  padding: 0.5em 0.5em;
  height: 5em;
  max-width: 100%;

  border-radius: 1em;
  cursor: pointer;

  &.active {
    background-color: ${(props) => props.theme.primary.background};
  }

  &.active-mobile {
    position: fixed;
    justify-content: start;

    padding: 0em 1em;
    width: 100%;
    top: 0;
    z-index: 9;

    background-color: ${(props) => props.theme.secondary.background};
    border-radius: 0;

    color: ${(props) => props.theme.secondary.font.color};

    h3 {
      margin: 0;
    }
  }

  @media only screen and (max-width: 767px) {
    margin: 0;
    padding: 0.5em 1em;
  }
`;

export const Picture = styled.img`
  margin-right: 1em;
  width: 4em;
  height: 4em;

  border-radius: 100%;

  object-fit: cover;

  @media only screen and (max-width: 767px) {
    width: 3em;
    height: 3em;
  }
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

  font-size: 0.7em;
`;

export const MobBackBtn = styled.img`
  display: none;

  @media only screen and (max-width: 767px) {
    display: block;

    margin-right: 2em;
    width: 2em;
    height: 2em;

    object-fit: cover;
  }
`;
