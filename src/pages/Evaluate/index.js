import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import {
  Container,
  Title,
  ContainerEvaluates,    
  TextEvaluate,
} from './styles';

import firestore from '@react-native-firebase/firestore';

import LoadingComponent from '../../component/Loading';

export default function Evaluate({ navigation }) {
  const [cart, setCart] = useState([]);    
  const [loading, setLoading] = useState(true);

  //Busca os dados no firebase
  useEffect(() => {
    firestore()
      .collection('evaluate')
      .get()
      .then((querySnapshot) => {
        let list = [];

        querySnapshot.forEach((doc) => {
          const cartItems = {
            id: doc.id,            
            productsEvaluate: doc.data().productsEvaluate,
            deliveryEvaluate: doc.data().deliveryEvaluate,            
          };
          list.push(cartItems);
        });
        setCart(list);
        setLoading(false);
      })
      .catch((e) => {
        console.log('Cart, useEffect: ' + e);
      });
  }, []);  

  return (
    <Container>
      <View>
        <Title>Avaliações</Title>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart}        
        renderItem={({ item }) => {
          return (
            <ContainerEvaluates>
              <TextEvaluate>Produto: {item.productsEvaluate} </TextEvaluate>
              <TextEvaluate>Entrega: {item.deliveryEvaluate} </TextEvaluate>              
            </ContainerEvaluates>
          );
        }}
      />     
      {loading && <LoadingComponent/>}
    </Container>
  );
}
