import { CommonActions } from '@react-navigation/native';
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

     <ButtonConfirm onPress={() => navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'AddEvaluate'}],
        }),
      )}
      >
       <TextButton>Confirmar recebimento</TextButton>
     </ButtonConfirm>
   </Container>
  );
}