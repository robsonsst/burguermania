import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.background};
`;

export const TextPrincipal = styled.Text`
  font-size: 27px;
  font-family: ${(props) => props.theme.regular};
  margin: 3%;
  color: ${(props) => props.theme.primaryText};
`;

export const ContainerTouchable = styled.TouchableOpacity`
  margin: 10px;  
  padding: 6px;  
  flex-direction: row;
`;

export const ContainerImage = styled.Image`
  align-self: center;
  width: 100px;
  height: 120px;
  margin-right: 25px;
  border-radius: 20px;
`;

export const TextBurguer = styled.Text`
  font-size: 22px;
  font-family: ${(props) => props.theme.regular};
  margin-bottom: 10px;
`;

export const TextDescription = styled.Text`
  font-size: 12px;
  font-family: ${(props) => props.theme.regular};
  width: 220px;
`;

export const TextPrice = styled.Text`
  margin-top: 18px;
  font-size: 19px;
  font-family: ${(props) => props.theme.regular};
  font-weight: bold;
`;

export const Border = styled.View`    
  width: 100%;  
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.backgroundChat};
`;