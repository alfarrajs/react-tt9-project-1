import styled from "styled-components";

export const Validation = styled.div`
 display: flex;
 flex-direction : column;
 p{
  color: red;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
 }
`
export const Control = styled.input`
  border-radius: 0.375rem;
  border: 1px solid ${props => props.variant == 'error' ? 'red' : '#8692A6'};
  height: 4rem;
  width : 100%;
  padding : 1.44rem 1.88rem;
  color : var(--gray-color);
  &::placeholder{
  color:  #8692A6;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
  margin-bottom: 0.44rem;
  &:focus{
    box-shadow: 0 0 3px 1px #2f7ded;
  }

`
export const Group = styled.div`
 width : 100%;
 display :flex;
 flex-direction : column ;
 position : relative;
`
export const StyledForm = styled.form`
  display : flex ;
  width: 26.625rem;
  flex-direction : column;
  gap : 1.5rem;

`
export const StyledControlIcon = styled.div`
  position : absolute;
  top : 3.3rem ;
  right : 1.03rem;
  width: 1.875rem;
  height: 1.5rem; 
  cursor : pointer;
  svg{
    width : 100%;
    height : 100%
  }
`

export const StyledCheckbox = styled.div`
  display: flex;
  gap : 0.69rem;
  align-items: center;
  position: relative;
  label{
    color: var(--gray-color);
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  input {
    width: 25px;
    height: 25px;
    z-index: 999;
 /* Hide the default checkbox */
 & {
            opacity: 0;
        }
  }    
        /* creating a custom checkbox based
            on demand */
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #fff;
    border-radius: 0.25rem;
    border : 4px solid ${props => props.variant == 'error' ? '#d06868' : '#C4C4C4'};
    }
          
        span:after {
            content: "";
            position: absolute;
            display: none;
        }
          
        input:checked ~ span:after {
            display: block;
        }
         span:after {
            left: -1.5px;
            bottom: -1.5px;
            width: 120%;
            height: 120%;
            border-radius: 0.25rem;
            background-color :#1565D8; 
        }
  
`
