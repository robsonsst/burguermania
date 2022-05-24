import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background-color: ${props => props.theme.background};
`;

export const Title = styled.Text`
  margin-bottom: 50px;
  font-size: 27px;
  font-family: ${props => props.theme.regular};
  color: #000;
`;

export const ContainerEvaluates = styled.View`  
  flex-direction: column;
  width: 500px;
  right: 50px;
  padding: 5px;
  margin-bottom: 15px;
  border-radius: 7px;
  background-color: ${props => props.theme.background};
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.backgroundChat};
`;

export const TextEvaluate = styled.Text`
  margin-left: 55px;    
  margin-bottom: 20px;
  color: ${props => props.theme.secondaryText};
  font-size: 16px;
  font-family: ${props => props.theme.regular};  
`;