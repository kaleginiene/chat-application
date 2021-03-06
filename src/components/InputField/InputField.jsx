import React from "react";
import PropTypes from "prop-types";
import * as S from "./InputField.style";

function InputField({
  accept,
  disabled,
  handleChange,
  handleClick,
  handleKeyUp,
  label,
  minLength,
  options,
  placeholder,
  radioId,
  radioName,
  required,
  type,
  value,
}) {
  switch (type) {
    case "number":
      return (
        <S.InputWrapper onClick={handleClick}>
          <S.Label>{label}</S.Label>
          <S.Input
            type="number"
            step="0.1"
            placeholder={placeholder}
            onChange={handleChange}
            required={required}
            disabled={disabled}
            value={value}
          />
        </S.InputWrapper>
      );
    case "email":
      return (
        <S.InputWrapper onClick={handleClick}>
          <S.Label>{label}</S.Label>
          <S.Input
            type="email"
            placeholder={placeholder}
            onChange={handleChange}
            required={required}
            minLength={minLength}
            disabled={disabled}
            value={value}
          />
        </S.InputWrapper>
      );
    case "password":
      return (
        <S.InputWrapper onClick={handleClick}>
          <S.Label>{label}</S.Label>
          <S.Input
            type="password"
            placeholder={placeholder}
            onChange={handleChange}
            required={required}
            minLength={minLength}
            disabled={disabled}
            value={value}
          />
        </S.InputWrapper>
      );
    case "longtext":
      return (
        <S.InputWrapper onClick={handleClick}>
          <S.Label>{label}</S.Label>
          <S.TextArea
            type="longtext"
            placeholder={placeholder}
            onChange={handleChange}
            required={required}
            disabled={disabled}
            value={value}
          />
        </S.InputWrapper>
      );
    case "dropdown":
      return (
        <S.InputWrapper>
          <S.Label>{label}</S.Label>
          <S.Select type="dropdown" onChange={handleChange} defaultValue>
            <option disabled value>
              {options[0].name}
            </option>
            {options.slice(1).map((option) => (
              <option key={option.id} value={option.value}>
                {option.name}
              </option>
            ))}
          </S.Select>
        </S.InputWrapper>
      );
    case "radio":
      return (
        <>
          <S.RadioLabel>
            {label}
            <S.Radio
              type="radio"
              id={radioId}
              onChange={handleChange}
              defaultValue
              name={radioName}
              value={value}
            />
          </S.RadioLabel>
        </>
      );
    case "file":
      return (
        <>
          <S.InputWrapper>
            <S.Label>{label}</S.Label>
            <S.Input type="file" accept={accept} onChange={handleChange} />
          </S.InputWrapper>
        </>
      );
    default:
      return (
        <S.InputWrapper onClick={handleClick}>
          <S.Label>{label}</S.Label>
          <S.Input
            type="text"
            placeholder={placeholder}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            minLength={minLength}
            required={required}
            disabled={disabled}
            value={value}
          />
        </S.InputWrapper>
      );
  }
}

InputField.propTypes = {
  accept: PropTypes.string,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  handleKeyUp: PropTypes.func,
  label: PropTypes.string,
  minLength: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  radioId: PropTypes.string,
  radioName: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default InputField;
