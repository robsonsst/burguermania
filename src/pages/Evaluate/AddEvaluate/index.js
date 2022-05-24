import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { Alert } from 'react-native';

import {
  Container,
  Title,
  Input,
  ButtonEvaluate,
  ButtonNotEvaluate,
  TextButton
} from './styles';
import { CommonActions } from '@react-navigation/native';

export default function AddEvaluate({ navigation }) {

  const [productsEvaluate, setProductsEvaluate] = useState('');
  const [deliveryEvaluate, setDeliveryEvaluate] = useState('');

  function addEvaluate() {
    if(productsEvaluate !== '' && deliveryEvaluate !== ''){
      firestore().collection('evaluate').add({      
        productsEvaluate: productsEvaluate,
        deliveryEvaluate: deliveryEvaluate,              
      });      
      Alert.alert('Informação', 'Obrigado pela preferência e pelo feedback. Aguardamos seu próximo pedido!')
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'MyBar'}],
        }),
      );
    } else {
      Alert.alert('Erro', 'Digite nos campos para adicionar sua avaliação!');
    }
  }

  function noEvaluate(){
    Alert.alert('Informação', 'Obrigado pela preferência. Aguardamos seu próximo pedido!')

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'MyBar'}],
      }),
    )
  }

  return (
    <Container>
      <Title>Avalie-nos</Title>

      <Input
        placeholder="Avalie os produtos"
        placeholderTextColor={'#BF8DB2'}        
        returnKeyType="next"
        value={productsEvaluate}          
        onChangeText={(value) => setProductsEvaluate(value)}
      />

      <Input
        placeholder="Avalie a entrega"
        placeholderTextColor={'#BF8DB2'}        
        returnKeyType="next"
        value={deliveryEvaluate}          
        onChangeText={(value) => setDeliveryEvaluate(value)}
      />

      <ButtonEvaluate onPress={addEvaluate}>
        <TextButton>AVALIAR</TextButton>
      </ButtonEvaluate>

      <ButtonNotEvaluate onPress={noEvaluate}>
        <TextButton>PULAR</TextButton>
      </ButtonNotEvaluate>
    </Container>
  );
}