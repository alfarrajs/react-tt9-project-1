import styled, { css } from 'styled-components'
import Typography from './Typography'

const commonStyles = css`
    font-style : ${props => props.fontStyle}

`;
export const StyledH1 = styled.h1`
  color: #000;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
  text-align: ${props=>  props.variant};
  ${commonStyles}
  

`
export const StyledH2 = styled.h2`
  color:  var(--gray-color);
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.75rem;
  text-align: ${props=>  props.variant};
  ${commonStyles}

`
export const StyledLabel = styled.label`
  color:  var(--gray-color);
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
  margin-bottom : 0.87rem;

`
export const StyledParagraph = styled.p`
  color: ${props=>props.variant == 'light' ? '#fff':' var(--gray-color)'};
  font-family: Inter;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 2.375rem;
  margin-bottom: 3.69rem;
  ${commonStyles}

`

