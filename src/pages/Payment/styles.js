import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background-color: ${props => props.theme.background};
`;

export const TextPrincipal = styled.Text`
  margin-bottom: 10px;
  font-size: 27px;
  font-family: ${props => props.theme.regular};
  color: ${props => props.theme.primaryText};
`;

export const ContainerPayment = styled.View`  
  flex-direction: column;
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
`;

export const ContainerProduct = styled.View`
  flex-direction: row;
  width: 100%;  
`;

export const ProductImage = styled.Image`
  width: 40%;
  height: 100%;
  margin-right: 20px;
  border-radius: 10px;
`;

export const Border = styled.View`  
  margin-top: 10px;
  width: 100%;  
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.backgroundChat};
`;

export const TextBurguer = styled.Text`
  font-size: 16px;
  font-family: ${props => props.theme.regular};
`;

export const TextNotes = styled.Text`
  font-size: 12px;
  font-family: ${props => props.theme.regular};
`;

export const TextPrice = styled.Text`
  font-size: 16px;
  font-family: ${props => props.theme.regular};
`;

export const TextTotalPrice = styled.Text`
  margin-bottom: 10px;
  font-size: 25px;
  font-family: ${props => props.theme.regular};
`;

export const ContainerButtons = styled.View`
  flex-direction: row;  
  max-width: 80%;  
`;

export const CustomButtom = styled.TouchableOpacity`
  width: 40%;
  height: 50px;
  background-color: ${props => props.theme.button};
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  margin-right: 8px;
`;

export const TextButton = styled.Text`
  color: ${props => props.theme.secondaryText};
  font-family: ${props => props.theme.regular};
  font-size: 18px;
  font-weight: bold;
`;