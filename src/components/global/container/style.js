import { styled } from "styled-components";

export const StyledContainer = styled.div`
 margin : auto;
 width : ${props => props.variant =='lg' ? '69.5%':'53.3%'} ;
 @media (max-width : 991px){
  width : 95%;
 }
`