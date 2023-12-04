import styled from "styled-components";

export const Title = styled.h1`
  color: ${props => props.color};
  opacity: ${ props => props.activet ? '1' : '0'}
`;
