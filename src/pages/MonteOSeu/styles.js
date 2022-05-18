import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${(props) => props.theme.background};  
`;

export const Title = styled.Text`
  font-size: 27px;
  font-family: ${(props) => props.theme.regular};
  margin: 3%;
  color: ${(props) => props.theme.primaryText};
`;

export const Items = styled.View`  
  width: 100%;
  padding: 10px;    
  margin-bottom: 20px;
  flex-direction: column;  
  border-radius: 10px;
`;

export const ProductImage = styled.Image`  
  width: 100%;
  height: 120px;
  margin-right: 25px;  
`;

export const ContainerTexts = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const ProductText = styled.Text`
  font-size: 17px;
  font-family: ${(props) => props.theme.regular};  
  color: ${(props) => props.theme.primaryText};
  margin-right: 30px;
`;

export const CustomButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.button};
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const CustomButtonText = styled.Text`
  color: ${props => props.theme.secondaryText};
  font-family: ${props => props.theme.regular};
  font-size: 18px;
  font-weight: bold;  
`;