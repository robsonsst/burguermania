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

export default function AddEvaluate() {

  const [productsEvaluate, setProductsEvaluate] = useState('');
  const [deliveryEvaluate, setDeliveryEvaluate] = useState('');

  function addEvaluate() {
    if(productsEvaluate !== '' && deliveryEvaluate !== ''){
      firestore().collection('evaluate').add({      
        productsEvaluate: productsEvaluate,
        deliveryEvaluate: deliveryEvaluate,      
        
      });
      navigation.navigate('MyBar');
    } else {
      Alert.alert('Erro', 'Digite nos campos para adicionar sua avaliação!');
    }

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

      <ButtonNotEvaluate onPress={() => navigation.navigate('MyBar')}>
        <TextButton>PULAR</TextButton>
      </ButtonNotEvaluate>
    </Container>
  );
}