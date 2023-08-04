import React from "react";
import BackBtn from "./BackBtn";
import SecHeader from "../../../global/secheader/SecHeader";
import Container from "../../../global/container/Container";
import FromContainer from "./FromContainer";
import HrOr from "../../../global/hror/HrOr";
import Button from "../../../global/Button/Button";
const Right = ({ setPage }) => {
  return (
    <div className="right-side" style={{ width: "55.5%", overflowY: "auto" }}>
      <BackBtn setPage={setPage}></BackBtn>
      <Container variant={"sm"}>
        <SecHeader
          heading1={"Register Individual Account!"}
          heading2={
            "For the purpose of gamers regulation, your details are required."
          }
          size="md"
          style={{ marginBottom: "1.75rem" }}
        ></SecHeader>
        <FromContainer></FromContainer>
      </Container>
    </div>
  );
};

export default Right;
