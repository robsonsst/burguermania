import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background-color: ${props => props.theme.background};
`;

export const Title = styled.Text`
  margin-bottom: 10px;
  font-size: 27px;
  font-family: ${props => props.theme.regular};
  color: #000;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 150px;
  margin-top: 20px;
  padding: 10px;
  border-width: 1px;
  border-color: ${props => props.theme.secondaryText};
  border-radius: 7px;  
  font-family: ${props => props.theme.regular};
  font-size: 18px;
  background-color: ${props => props.theme.backgroundChat};
  color: ${props => props.theme.background};
`;

export const ButtonEvaluate = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  margin-top: 25px;
  margin-left: 20px;
  margin-right: 20px;     
  background-color: ${props => props.theme.backgroundChat};
  border-radius: 7px;
  justify-content: center;
  align-items: center; 
`;

export const ButtonNotEvaluate = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  margin-top: 25px;
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