import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

import {
  Container,
  Title,
  ButtonConfirm,
  TextButton, 
  Border
} from './styles';

export default function ProductProgress({navigation}) {
 return (
   <Container>
     <Title>Acompanhe seu pedido</Title>
     <Border/>
     <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
       <Text>
        Preparo
       </Text>
       <Text>
        À caminho
       </Text>
       <Text>
        Entregue
       </Text>
     </View>
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