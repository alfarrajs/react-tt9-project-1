import styled from "styled-components";

export const StyledBtn = styled.button`
  width: 100%;
  height: 4rem;
  border-radius: 0.375rem;
  background: ${props => props.variant == 'primary' ? ' var(--blue-color)' : '#FFF'};
  color: ${props => props.variant !== 'primary' ? '#000' : '#FFF'};
  box-shadow:  ${props => props.variant !== 'primary' ? '0px 4px 10px 0px rgba(0, 0, 0, 0.08)' : ''};
  margin-bottom : 1.38rem;
  cursor : pointer;
  transition: 0.5s;
  &:hover{
    background-color : ${props => props.variant == 'primary' ? '#2f7ded' : '#abcdef'};
  }

`