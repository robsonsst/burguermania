import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${props => props.theme.background};
`;

export const ItemScroll = styled.View`
  flex-direction: row;
  justify-content: center;
`;
