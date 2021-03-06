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

export const ButtonConfirm = styled.TouchableOpacity`
  top: 500px;
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.button};
  border-radius: 7px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: ${props => props.theme.secondaryText};
  font-family: ${props => props.theme.regular};
  font-size: 18px;
  font-weight: bold;  
`;
export const Border = styled.View`  
  width: 100%;
  margin-top: 30px;
  border-bottom-width: 4px;
  border-bottom-color: ${props => props.theme.backgroundChat};
`;