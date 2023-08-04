import styled from "styled-components";

export const StyledSaying = styled.div`
  width: 29.5625rem;
  span{
  display: block;
  color: ${props => props.variant == 'light' ? '#00DAF7' : '#BABABA'};
  font-family: 'Gayathri';
  font-size: 6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: -100px;
  }
  .saying-paragraph{
    margin-bottom: 3.69rem;
    color : ${props =>props.variant =='light' ? '#FFF':' var(--gray-color)'};
  }

`