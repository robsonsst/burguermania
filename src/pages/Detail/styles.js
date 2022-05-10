import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1px;
  width: 100%;
  background-color: ${props => props.theme.background};
`;

export const ContainerImage = styled.Image`
  align-self: center;
  width: 100%;
  height: 300px;
`;

export const TextBurguer = styled.Text`
  font-size: 25px;
  font-family: ${props => props.theme.regular};
  margin-bottom: 10px;
  margin-left: 10px;
  color: ${props => props.theme.primaryText};  
`;

export const TextDescription = styled.Text`
  font-size: 14px;
  font-family: ${props => props.theme.regular};
  width: 380px;
  margin-left: 10px;
  color: ${props => props.theme.primaryText};
`;

export const TextPrice = styled.Text`
  margin-top: 18px;
  font-size: 20px;
  font-family: ${props => props.theme.regular};
  font-weight: bold;
  margin-left: 8px;
  color: ${props => props.theme.primaryText};
`;

export const ContainerNotes = styled.View`
  padding: 20px;
  flex-direction: row;
  margin-top: 50px;
  right: 5px;
  align-items: center;
`;

export const TextNotes = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  font-family: ${props => props.theme.regular};  
  color: ${props => props.theme.primaryText};
`;

export const ContainerInputNotes = styled.View`
  left: 16px;
  width: 91%;
  height: 70px;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${props => props.theme.secondaryText};
  align-items: flex-start;
  justify-content: center;
`;

export const InputNotes = styled.TextInput`
  font-family: ${props => props.theme.regular};
  font-size: 15px;
  margin-left: 10px;
  color: ${props => props.theme.primaryText}
`;

export const ContainerAddCart = styled.View`
  flex-direction: row;
  width: 90%;
  margin: 15px;
  top: 50px;
  left: 5px;
  justify-content: space-between;
`;

export const ContainerCounter = styled.View`
  border-width: 1px;
  border-radius: 10px;
  border-color: ${props => props.theme.secondaryText};
  background-color: ${props => props.theme.background};
  width: 30%;
  height: 45px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonCounterCart = styled.TouchableOpacity`
  width: 50%;
  height: 45px;  
  justify-content: center;
  align-items: center;
`;

export const TextButtonCounterCart = styled.Text`
  font-size: 15px;
`;

export const TextQuantityCart = styled.Text`
  font-size: 15px;
`;

export const ButtonAddCart = styled.TouchableOpacity`   
  width: 45%;
  height: 45px; 
  background-color: #ff0000;
  border-width: 1px;
  border-radius: 10px;
  border-color: #ff0000;    
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextButtonAddCart = styled.Text`  
  margin: 10px;
  color: ${props => props.theme.primaryText};
`;