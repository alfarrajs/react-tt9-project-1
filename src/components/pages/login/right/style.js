import { styled } from "styled-components";

export const StyledInfo = styled.p`
  
  button,&{
    color: #696F79;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
  }
  button{
    color: var(--blue-color) !important;
    &:hover{
      text-decoration: underline;
    }
  }
`