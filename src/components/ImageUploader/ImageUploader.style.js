import styled from "styled-components";

export const Block = styled.div`
  position: relative;

  margin-top: 2em;
  padding: 1em;

  background-color: ${(props) => props.theme.primary.background};
  border-radius: 1em;
  border: 2px solid #cbdaef;

  text-align: center;

  @media only screen and (max-width: 767px) {
    border-radius: 0;
  }
`;

export const Title = styled.h2``;

export const Notification = styled.div`
  padding: 1em;
  margin-bottom: 1.5em;

  background-color: ${(props) => props.theme.secondary.background};
  border-radius: 0.5em;

  color: #fff;
`;
