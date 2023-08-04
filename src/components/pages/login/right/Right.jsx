import React from "react";
import Container from "../../../global/container/Container";
import SecHeader from "../../../global/secheader/SecHeader";
import SocialMedia from './socialmedia/SocialMedia';
import {StyledInfo} from './style.js'
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";
const Right = ({setPage}) => {
  return (
    <div style={{ flex: "1",padding : '9.12rem 0',overflow : 'auto' }}>
      <Container variant="md">
        <SecHeader
          heading1={"Join the game!"}
          heading2={"Go inside the best gamers social network!"}
          variant={"center"}
          size="lg"
          style={{marginBottom : '2.5rem'}}
        ></SecHeader>
        <SocialMedia></SocialMedia>
        <FormContainer></FormContainer>
        <StyledInfo>Don’t have an account? <Link to={"/register"}>register</Link> </StyledInfo>
      </Container>
    </div>
  );
};

export default Right;
