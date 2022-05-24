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
  width: 95%;
  height: 120px;
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
  width: 95%;
  height: 50px;
  top: 200px;
  margin-top: 25px;
  margin-left: 6px;
  margin-right: 10px;       
  background-color: ${props => props.theme.button};
  border-radius: 7px;
  justify-content: center;
  align-items: center; 
`;

export const ButtonNotEvaluate = styled.TouchableOpacity`
  width: 95%;
  height: 50px;
  top: 200px;
  margin-top: 15px;
  margin-left: 6px;
  margin-right: 10px;       
  background-color: ${props => props.theme.backgroundChat};
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