import styled from 'styed-components/native';

export const ButtonLogout = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.button};
  border-radius: 7px;
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