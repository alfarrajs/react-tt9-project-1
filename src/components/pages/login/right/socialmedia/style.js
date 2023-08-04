import { styled } from "styled-components";

export const StyledSocialMediaElement = styled.div`
  width: 22.5%;
  border-radius: 0.375rem;
  background: #FFF;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content :center;
  align-items : center;
  transition: 0.5s linear;
  button{
    width :100%;
    height : 100%;
    cursor : pointer;
  }
  &:hover{
    box-shadow: 0px 0px 16px 0px var(--blue-color);

  }
`
export const StyledSocialMedia = styled.div`
  display: flex;
  justify-content :center;
  gap : 1rem;
  width: 19.25rem;
  height: 4.0625rem;
  margin:0 auto 3rem;

`