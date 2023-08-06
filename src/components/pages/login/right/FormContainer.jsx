import React, { useState } from "react";
import Form from "../../../global/forms/Form";
import Swal from "sweetalert2";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const FormContainer = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://react-tt-api.onrender.com/api/users/login', {
        email: email,
        password: password
      });
  
      // Assuming the API returns a success message or token upon successful login
      const { token } = response.data;
  
      // Perform actions based on the response
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Logged in successfully!',
        showConfirmButton: false,
        timer: 900
      });

      setTimeout(() => {
        navigate("/test");
      }, 1100);
  
    } catch (error) {
      // Handle login error
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Login failed',
        text: 'Invalid email or password',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };


  return (
    <div className="login-form">
      <Form>
        <Form.Group>
          <Form.Label>Your email</Form.Label>
          <Form.Control
            as="text"
            placeholder={"Write your email"}
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your password</Form.Label>
          <Form.Control
            as={showPassword ? "text" : "password"}
            placeholder={"•••••••••"}
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          ></Form.Control>

          {password.length >= 1 && (
            <Form.ControlIcon>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M2 11.98C8.09 1.31996 15.91 1.32996 22 11.98"
                        stroke="#000000"
                        strokeWidth="1.5"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M22 12.01C15.91 22.67 8.09 22.66 2 12.01"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M14.83 9.17999C14.2706 8.61995 13.5576 8.23846 12.7813 8.08386C12.0049 7.92926 11.2002 8.00851 10.4689 8.31152C9.73758 8.61453 9.11264 9.12769 8.67316 9.78607C8.23367 10.4444 7.99938 11.2184 8 12.01C7.99916 13.0663 8.41619 14.08 9.16004 14.83"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M12 16.01C13.0609 16.01 14.0783 15.5886 14.8284 14.8384C15.5786 14.0883 16 13.0709 16 12.01"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M17.61 6.39004L6.38 17.62C4.6208 15.9966 3.14099 14.0944 2 11.99C6.71 3.76002 12.44 1.89004 17.61 6.39004Z"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M20.9994 3L17.6094 6.39"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M6.38 17.62L3 21"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M19.5695 8.42999C20.4801 9.55186 21.2931 10.7496 21.9995 12.01C17.9995 19.01 13.2695 21.4 8.76953 19.23"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                )}
              </button>
            </Form.ControlIcon>
          )}
        </Form.Group>
        <Form.Submit handleSubmit={handleSubmit}>Login</Form.Submit>
      </Form>
    </div>
  );
};

export default FormContainer;
