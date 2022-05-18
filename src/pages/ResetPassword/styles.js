import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.primary};
`;

export const Title = styled.Text`
  padding: 30px;
  font-family: ${props => props.theme.regular};
  font-size: 22px;
  color: ${props => props.theme.background};
`;

export const ContainerInput = styled.View`
  border-width: 1px;
  padding: 10px;
  border-color: ${props => props.theme.secondaryText};
  border-radius: 7px;
  flex-direction: row;
  margin-top: 10px;
  width: 80%;
  height: 50px;
`;

export const  Input = styled.TextInput`
  flex: 1;
  font-family: ${props => props.theme.regular};
  font-size: 18px;
  color: ${props => props.theme.background};  
`;

export const CustomButton = styled.TouchableOpacity`
  width: 35%;
  height: 50px;
  background-color: ${props => props.theme.button};
  border-radius: 7px;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-right: 35px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

export const TextCustomButton = styled.Text`
  color: ${props => props.theme.secondaryText};
  font-family: ${props => props.theme.regular};
  font-size: 18px;
  font-weight: bold;
`;

export const TextSignIn = styled.Text`
  margin-top: 70px;
  align-self: center;
  font-family: ${props => props.theme.regular};
  font-size: 22px;
  color: ${props => props.theme.secondaryText};
`;
