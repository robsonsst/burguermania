import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background-color: ${props => props.theme.background};
`;

export const Title = styled.Text`
  margin-bottom: 30px;
  font-size: 27px;
  font-family: ${props => props.theme.regular};
  color: ${props => props.theme.primaryText};
`;

export const OptionsProfile = styled.TouchableOpacity`
  width: 500px;
  right: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.backgroundChat};
`;

export const TextOptions = styled.Text`
  margin-left: 15px;
  font-size: 20px;
  font-family: ${props => props.theme.regular};
  color: ${props => props.theme.secondaryText};
`;

export const ButtonLogout = styled.TouchableOpacity`
  width: 95%;
  height: 50px;
  position: absolute;
  bottom: 20px;
  background-color: ${props => props.theme.button};
  border-radius: 7px;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const TextButton = styled.Text`
  color: ${props => props.theme.secondaryText};
  font-family: ${props => props.theme.regular};
  font-size: 18px;
  font-weight: bold; 
`;