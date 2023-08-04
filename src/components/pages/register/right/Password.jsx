import React, { useState } from "react";
import { StyledProgress } from "./style";
import Form from "../../../global/forms/Form";

const Password = ({ value, setControls, variant }) => {
  const [degree, setDegree] = useState(0);

  let msg = [
    "very bad",
    "Not bad but you know you can do it better",
    "very Good",
  ];
  const colors = ["red", "#FFC107", "green"];
  const progressValues = [15, 60, 100];

  const checkPassword = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/i;
    const isStrong = regex.test(value);
    let degree = 0;
    if (isStrong) {
      degree = 2;
      msg = "very good";
    } else {
      if (value.length >= 8) {
        degree = 1;
        msg = "not bad but you know you can do it better";
      } else {
        degree = 0;
        msg = "very bad";
      }
    }
    setDegree(degree);
    return isStrong;
  };
  

  return (
    <Form.Group>
      <Form.Label>Create password*</Form.Label>
      <Form.Control
        as="password"
        placeholder={"Password"}
        value={value}
        handleChange={(e) => {
          checkPassword();
          setControls((prev) => {
            return {
              ...prev,
              password: {
                ...prev["password"],
                value: e.target.value,
                isValid: checkPassword(),
              },
            };
          });
        }}
        variant={variant}
      ></Form.Control>
      {value && <Form.Validation msg={msg[degree]} textColor={colors[degree]}>
        <StyledProgress
          className="progress"
          value={progressValues[degree]}
          $D
          color={colors[degree]}
        >
          <div className="progress-value"></div>
        </StyledProgress>
      </Form.Validation>}
    </Form.Group>
  );
};

export default Password;
