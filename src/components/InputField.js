import React from "react";
import { useField } from "formik";
import styled from "styled-components/macro";

const InputGroup = styled.div`
  margin-bottom: 20px;
  max-width: 325px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  display: block;
`;

const Input = styled.input`
  width: 325px;
  height: 40px;
  border: 1px solid #e2e6ea;
  border-radius: 5px;
  padding: 5px 15px;
  margin-top: 3px;
  font-size: 14px;
  background-color: transparent;
  transition: all 0.25s ease-in-out;

  &:focus,
  &:hover,
  &:not(:placeholder-shown) {
    outline: none;
    border: 1px solid #3961aa;
  }

  &::placeholder {
    color: #e2e6ea;
    opacity: 1;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Textarea = styled.textarea`
  width: 325px;
  height: 75px;
  padding: 10px 15px;
  margin-top: 3px;
  border: 1px solid #e2e6ea;
  border-radius: 5px;
  font-size: 14px;
  background-color: transparent;
  transition: all 0.25s ease-in-out;
  resize: vertical;

  &:focus,
  &:hover,
  &:not(:placeholder-shown) {
    outline: none;
    border: 1px solid #3961aa;
  }

  &::placeholder {
    color: #e2e6ea;
    opacity: 1;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Error = styled.div`
  color: #cf3e35;
  font-size: 12px;
  font-weight: 500;
  margin-top: 2px;
`;

const InputField = ({ label, id, as, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <InputGroup>
      <Label htmlFor={id}>{label}</Label>
      {as === "input" && <Input id={id} {...field} {...props} />}
      {as === "textarea" && <Textarea id={id} {...field} {...props} />}
      {meta.touched && meta.error ? (
        <Error className="error">{meta.error}</Error>
      ) : null}
    </InputGroup>
  );
};

export default InputField;
