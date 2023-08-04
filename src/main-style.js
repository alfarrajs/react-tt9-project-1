import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --blue-color : #1565D8;
    --gray-color : #696F79;
  }
  *{
    box-sizing: border-box;
    border : none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
  }
  button{
    background-color : transparent;
    cursor: pointer;
  }
  ul{
    list-style-type : none;
  }
  body{
    font-family : 'Inter','Times New Roman';
  }
`
export default GlobalStyle;