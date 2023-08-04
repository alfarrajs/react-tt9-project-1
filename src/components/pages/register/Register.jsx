import React from "react";
import Left from "./left/Left";
import Right from "./right/Right";

const Register = ({setPage}) => {
  return (
    <div className="register-page" style={{display: "flex", height:'100vh'}}>
      <Left></Left>
      <Right setPage={setPage}></Right>
    </div>
  );
};

export default Register;
