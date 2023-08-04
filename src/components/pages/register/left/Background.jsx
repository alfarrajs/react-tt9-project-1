import React from "react";
import Container from "../../../global/container/Container";
import { StyledBackground } from "./style";
const Background = ({ children }) => {
  return (
    <StyledBackground className="left-background">
      <div className="overlay">
        <Container variant="lg">{children}</Container>
      </div>
    </StyledBackground>
  );
};

export default Background;
