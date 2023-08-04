import { styled } from "styled-components";

export const SyledHr = styled.div`
  height: 0.0625rem;
  background: #F5F5F5;
  width: 100%;
  position: relative;
  margin-bottom : 0.87rem;
  span{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color : #fff;
    width: 5.16rem;
    color: #BABABA;
    text-align: center;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`