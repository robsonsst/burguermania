import React from 'react';

import {
  Container,
  Title,
  ButtonConfirm,
  TextButton
} from './styles';

export default function ProductProgress({navigation}) {
 return (
   <Container>
     <Title>Acompanhe seu pedido</Title>

     <ButtonConfirm onPress={() => navigation.navigate('AddEvaluate')}>
       <TextButton>Confirmar recebimento</TextButton>
     </ButtonConfirm>
   </Container>
  );
}