import styled from 'styled-components/native';

export const TextPrincipal = styled.Text`
  font-size: 27px;
  font-family: ${(props) => props.theme.regular};
  margin: 3%;
  color: ${(props) => props.theme.primaryText};
`;

export const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: ${props => props.theme.background};
`;

export const ItemScroll = styled.View`
  flex-direction: row;
  justify-content: center;
`;
