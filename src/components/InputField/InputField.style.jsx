import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Input = styled.input`
  margin-bottom: 1.5em;
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;

  border: ${(props) => props.theme.border};
  border-radius: 0.5em;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 767px) {
    margin: 0.5em 0;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.primary.background};
  padding: 0.5em;
  margin: 1em 0;

  &&:focus {
    outline: none;
  }

  @media only screen and (max-width: 767px) {
    margin: 0.5em 0;
  }
`;

export const Select = styled.select`
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;

  border-radius: 0.5em;
  border: 1px solid ${(props) => props.theme.primary.background};
`;

export const Radio = styled.input`
  width: 1em;
  margin-right: 0.8em;
  margin-left: 0.5em;
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  margin: 0.8em;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;

  color: ${(props) => props.theme.primary.color};
  text-align: right;
  font-size: 1em;

  @media only screen and (max-width: 767px) {
    margin-top: 2em;
    width: 100%;

    text-align: left;
  }
`;
