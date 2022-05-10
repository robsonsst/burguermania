import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';

import {
  Container,
  TextPrincipal,
  ContainerPayment,
  ContainerProduct,
  ProductImage,
  Border,
  TextBurguer,
  TextNotes,
  TextPrice,
  TextTotalPrice,
  ContainerButtons,
  CustomButtom,
  TextButton,
} from './styles';

import firestore from '@react-native-firebase/firestore';

export default function Payment({ navigation }) {
  const [payment, setPayment] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout) => {
    return new Promise((resolver) => setTimeout(resolver, timeout * 1000));
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await wait(2);
    setRefreshing(false);
  }, []);

  const counterTotalPrice = 0;
  //Busca os dados no firebase
  useEffect(() => {
    firestore()
      .collection('cart')
      .get()
      .then((querySnapshot) => {
        let list = [];
        let counterTotalPrice = 0;

        querySnapshot.forEach((doc) => {
          counterTotalPrice = counterTotalPrice + (doc.data().price);          
          const paymentItems = {
            id: doc.id,
            image: doc.data().image,
            title: doc.data().title,
            notes: doc.data().notes,
            price: doc.data().price,                        
          };          
          list.push(paymentItems);          
        });
        setPayment(list);                
        setTotalPrice(counterTotalPrice);
      })
      .catch((e) => {
        console.log('Payment, useEffect: ' + e);
      });
  }, []);

  return (
    <Container>
      <View>
        <TextPrincipal>Realizar Pagamento</TextPrincipal>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={payment}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => {
          return (
            <ContainerPayment>
              <ContainerProduct>
                <ProductImage source={{ uri: item.image }} />
                <View>
                  <TextBurguer> {item.title} </TextBurguer>
                  <TextNotes> {item.notes} </TextNotes>
                  <TextPrice> R$ {item.price}</TextPrice>
                </View>
              </ContainerProduct>
              <Border/>
            </ContainerPayment>
          );
        }}
      />
      <View>
        <TextTotalPrice>R$ {totalPrice}</TextTotalPrice>
      </View>
      <ContainerButtons>
        <CustomButtom onPress={() => navigation.navigate('Card')}>
          <TextButton>CARTÃO</TextButton>
        </CustomButtom>
        <CustomButtom onPress={() => navigation.navigate('Address')}>
          <TextButton>DINHEIRO</TextButton>
        </CustomButtom>
        <CustomButtom onPress={() => navigation.navigate('Address')}>
          <TextButton>PIX</TextButton>
        </CustomButtom>
      </ContainerButtons>
    </Container>
  );
}
