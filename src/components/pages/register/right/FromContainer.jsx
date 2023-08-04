import React, { useState } from "react";
import Form from "../../../global/forms/Form";
import Password from "./Password";
import Swal from 'sweetalert2'
import axios from "axios";

import { SpinnerLoader } from "./style";

import {useNavigate} from "react-router-dom";
const FromContainer = () => {
  const navigate = useNavigate();
  const [checkValidations, setCheckValidations] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [controls, setControls] = useState({
    username: {
      value: "",
      isValid: false,
      msgs: {
        error: "invalid username",
        notFound: "username is required!",
      },
    },
    email: {
      value: "",
      isValid: false,
      msgs: {
        error: "invalid email syntax",
        notFound: "email is required!",
      },
    },
    phone: {
      value: "",
      isValid: false,
      msgs: {
        error: "invalid phone syntax",
        notFound: "phone is required!",
      },
    },
    password: {
      value: "",
      isValid: false,
      msgs: {
        error: "",
        notFound: "",
      },
    },

    repassword: {
      value: "",
      isValid: false,
      msgs: {
        error: "password must be identical",
        notFound: "",
      },
    },
    agreeConditions: {
      isValid: false,
    },
  });
  
  const checkEmail = () => {
    if (!controls["email"].value) return controls["email"].msgs["notFound"];
    else if (
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(controls["email"].value)
    ) {
      return controls["email"].msgs["error"];
    } else {
      return true;
    }
  };
  const checkPhone = () => {
    if (!controls["phone"].value) return controls["phone"].msgs["notFound"];
    else if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
        controls["phone"].value
      )
    ) {
      return controls["phone"].msgs["error"];
    } else {
      return true;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCheckValidations(true);
    const isValid = Object.values(controls).every((control) => control.isValid);
    if (isValid) {
      setIsLoading(true); // Activate the loader
  
      // Send signup data to API
      const signupData = {
        name: controls?.username?.value,
        email: controls.email.value,
        password: controls.password.value,
      };
  
      try {
        await axios.post("https://react-tt-api.onrender.com/api/users/signup/", signupData);
        Swal.fire(
          'Registered Successfully!',
          'You clicked the button!',
          'success'
        );
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'User already exists',
          showConfirmButton: false,
          timer: 2000
        });
      } finally {
        setIsLoading(false); // Deactivate the loader
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Make sure you have passed the rules',
        showConfirmButton: false,
        timer: 2000
      });
    }
  };

  if (isLoading) {
    return (
      <SpinnerLoader>
        <div className="spinner"></div>
      </SpinnerLoader>
    );
  }
   else{
    return(
      <div className="form-container">
      <Form>
        <Form.Group>
          <Form.Label>User Name*</Form.Label>
          <Form.Control
            as="text"
            placeholder={"Enter user name"}
            value={controls["username"].value}
            handleChange={(e) => {
              setControls((prev) => {
                return {
                  ...prev,
                  username: {
                    ...prev["username"],
                    value: e.target.value,
                    isValid: e.target.value.length !== 0,
                  },
                };
              });
            }}
            variant={
              checkValidations && !controls["username"].isValid ? "error" : ""
            }
          ></Form.Control>
          {controls['username'].value.length == 0 && checkValidations && (
            <Form.Validation
              msg={
                !controls["username"].isValid
                  ? controls["username"].msgs["notFound"]
                  : ""
              }
            ></Form.Validation>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address*</Form.Label>
          <Form.Control
            as="email"
            placeholder={"Enter email address"}
            value={controls["email"].value}
            handleChange={(e) =>
              setControls((prev) => {
                return {
                  ...prev,
                  email: {
                    ...prev["email"],
                    value: e.target.value,
                    isValid: checkEmail() ? true : false,
                  },
                };
              })
            }
            variant={checkValidations && !controls["email"].isValid ? "error" :''}
          ></Form.Control>
          {checkValidations && (
            <Form.Validation msg={checkEmail()}></Form.Validation>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            as="phone*"
            placeholder={"Enter phone number"}
            value={controls["phone"].value}
            handleChange={(e) =>
              setControls((prev) => {
                return {
                  ...prev,
                  phone: {
                    ...prev["phone"],
                    value: e.target.value,
                    isValid: checkPhone() ? true : false,
                  },
                };
              })
            }
          ></Form.Control>
          {checkValidations && (
            <Form.Validation msg={checkPhone()}></Form.Validation>
          )}
        </Form.Group>
        <Password
          value={controls["password"].value}
          setControls={setControls}
          variant={
            checkValidations && !controls["password"].isValid ? "error" : ""
          }
        ></Password>
        <Form.Group>
          <Form.Label>Repeat password*</Form.Label>
          <Form.Control
            as="password"
            placeholder={"Repeat password"}
            value={controls["repassword"].value}
            handleChange={(e) =>
              setControls((prev) => {
                return {
                  ...prev,
                  repassword: {
                    ...prev["repassword"],
                    value: e.target.value,
                    isValid: e.target.value == controls["password"].value,
                  },
                };
              })
            }
            variant={
              checkValidations && !controls["repassword"].isValid ? "error" : ''
            }
          ></Form.Control>
          {checkValidations && (
            <Form.Validation
              msg={
                !controls["repassword"].isValid
                  ? controls["repassword"].msgs["error"]
                  : ""
              }
            ></Form.Validation>
          )}
        </Form.Group>

        <Form.Checkbox
          value={controls["agreeConditions"].isValid}
          handleChange={(e) =>
            setControls((prev) => {
              return {
                ...prev,
                agreeConditions: {
                  isValid: e.target.checked,
                },
              };
            })
          }
          variant={
            checkValidations && !controls["agreeConditions"].isValid ? "error" : ''
          }
        >
          I agree to terms & conditions
        </Form.Checkbox>
        <Form.Submit
          handleSubmit={handleSubmit}
        >
          Register Account
        </Form.Submit>
      </Form>
    </div>
    )
   }
};

export default FromContainer;