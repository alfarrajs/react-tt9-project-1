import { styled } from "styled-components";

export const StyledSecHeader = styled.div`
  h1{
    font-size : ${props => props.size =='lg' ? '2.625rem':'1.875rem'}
  }
`