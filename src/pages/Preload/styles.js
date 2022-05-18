import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.primary};
`;

export const ImageLogo = styled.Image`
  width: 320px;
  height: 180px;
`;