import styled from "styled-components/native";

export const Container = styled.ScrollView`  
  flex: 1;
  background-color: ${props => props.theme.primary};    
`;

export const TextPrincipal = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: ${props => props.theme.background};  
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 10px;
`;

export const ContainerInput = styled.View`
  align-self: center;
  width: 80%;
  height: 50px;
  margin-top: 20px;
  padding: 10px;
  border-width: 1px;
  border-color: ${props => props.theme.secondaryText};
  border-radius: 7px;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-family: ${props => props.theme.regular};
  font-size: 18px;
  color: ${props => props.theme.background};
`;

export const ContainerButton = styled.TouchableOpacity`
  align-self: center;
  width: 80%;
  height: 50px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;     
  background-color: ${props => props.theme.button};
  border-radius: 7px;
  justify-content: center;
  align-items: center; 
`;

export const TextButton = styled.Text`
  color: ${props => props.theme.secondaryText};
  font-family: ${props => props.theme.regular};
  font-size: 18px;
  font-weight: bold;
`;