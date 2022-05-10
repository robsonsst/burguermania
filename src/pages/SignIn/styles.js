import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary};
`;

export const ImageLogo = styled.Image`
  width: 320px;
  height: 170px;
  background-color: ${props => props.theme.background};
`;

export const TextPrincipal = styled.Text`
  color: #FFF;
  margin-top: 40px;
  font-size: 25px;
  font-family: ${props => props.theme.regular};
`;

export const ContainerInputEmail = styled.View`
  border-width: 1px;
  padding: 10px;
  border-color: ${props => props.theme.secondaryText};
  border-radius: 7px;
  flex-direction: row;
  margin-top: 20px;
  width: 80%;
  height: 50px;
`;

export const  Input = styled.TextInput`
  flex: 1;
  font-family: ${props => props.theme.regular};
  font-size: 18px;
  color: ${props => props.theme.background};  
`;

export const ContainerInputPassword = styled.View`
  border-width: 1px;
  padding: 10px;
  border-color: ${props => props.theme.secondaryText};
  border-radius: 7px;
  flex-direction: row;
  margin-top: 20px;
  width: 80%;
  height: 50px;
`;

export const TextResetPassword = styled.Text`
  color: ${props => props.theme.secondaryText};
  font-size: 16px;
  margin-top: 10px;
  text-decoration-line: underline;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
`;

export const CustomButton = styled.TouchableOpacity`
  width: 35%;
  height: 50px;
  background-color: ${props => props.theme.button};
  border-radius: 7px;
  margin-top: 25px;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
`;

export const TextCustomButton = styled.Text`
  color: ${props => props.theme.secondaryText};
  font-family: ${props => props.theme.regular};
  font-size: 18px;
  font-weight: bold;
`;

export const TextOtherOptions = styled.Text`
  color: ${props => props.theme.primaryText};
  font-family: ${props => props.theme.regular};
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerButtonSocial = styled.View`
  flex-direction: column;
  justify-content: space-around;
`;

export const ButtonSocial  = styled.TouchableOpacity`
  height: 50px;
  width: 330px;
  background-color: ${props => props.theme.background};
  border-color: ${props => props.theme.primary};
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;