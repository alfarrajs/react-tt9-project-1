import React from "react";
import {
  Control,
  ControlIcon,
  Group,
  StyledCheckbox,
  StyledControlIcon,
  StyledForm,
  Validation,
} from "./style.js";
import Typography from "../typography/Typography.jsx";
import Button from "../Button/Button.jsx";
const Form = ({ children }) => {
  return <StyledForm noValidate>{children}</StyledForm>;
};
Form.Validation = ({ msg, children, textColor }) => {
  return (
    <Validation className="control-validation" style={{ color: textColor }}>
      {children}
      <p style={{ color: textColor }}>{msg}</p>
    </Validation>
  );
};
Form.Control = ({ as, value, handleChange, placeholder, variant }) => {
  return (
    <Control
      type={as}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      variant={variant}
    />
  );
};
Form.Label = ({ children }) => {
  return <Typography as="label">{children}</Typography>;
};
Form.Group = ({ children, icon, style }) => {
  return (
    <Group className="from-group" style={style}>
      {children}
      {icon}
    </Group>
  );
};
Form.ControlIcon = ({ children }) => {
  return (
    <StyledControlIcon className="control-icon">{children}</StyledControlIcon>
  );
};
Form.Submit = ({ children, handleSubmit }) => {
  return (
    <Button type="submit" variant="primary" handleClick={handleSubmit}>
      {children}
    </Button>
  );
};
Form.Checkbox = ({ children, handleChange, value, variant }) => {
  return (
    <StyledCheckbox variant={variant}>
      <input
        type="checkbox"
        name="conditions"
        checked={value}
        onChange={handleChange}
        id="conditions"
      />
      <span className="mark"></span>
      <label htmlFor="conditions">{children}</label>
    </StyledCheckbox>
  );
};
export default Form;
