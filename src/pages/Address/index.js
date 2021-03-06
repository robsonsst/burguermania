import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Alert } from 'react-native';

import {
  Container,
  TextPrincipal,
  ContainerAddress,
  ContainerItemsAddress,
  Border,
  TextItem,
  ContainerIcons,
  ContainerButtons,
  CustomButtom,
  TextButton,
} from './styles';

import firestore from '@react-native-firebase/firestore';

import { Feather } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';

export default function Address({ navigation }) {
  const [address, setAddress] = useState([]);

  let idCart;

  //Busca os dados no firebase
  useEffect(() => {
    firestore()
      .collection('address')
      .get()
      .then((querySnapshot) => {
        let list = [];

        querySnapshot.forEach((doc) => {
          const addressItems = {
            id: doc.id,
            city: doc.data().city,
            cep: doc.data().cep,
            district: doc.data().district,
            street: doc.data().street,
            number: doc.data().number,
            reference: doc.data().reference,
          };

          list.push(addressItems);
        });
        setAddress(list);
      })
      .catch((e) => {
        console.log('Address, useEffect: ' + e);
      });

    //pega todos os produtos do carrinho
    firestore()
      .collection('cart')
      .get()
      .then((querySnapshot) => {
        let list = [];

        querySnapshot.forEach((doc) => {
          const cartItems = {
            id: doc.id,
            image: doc.data().image,
            title: doc.data().title,
            notes: doc.data().notes,
            price: doc.data().price,
          };
          list.push(cartItems);
          idCart = cartItems.id;
        });        
      })
      .catch((e) => {
        console.log('Cart, useEffect: ' + e);
      });    
  }, []);

  //Deletar produto
  function deleteAddress(id) {
    firestore()
      .collection('address')
      .doc(id)
      .delete()
      .then(() => {});
  }

  //deleta produtos do carrinho ao finalizar compra
  function deleteCart(){
    firestore()
    .collection('cart')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((idCart)=>{                
        idCart.ref.delete();
      })
    })    
    Alert.alert('Sucesso!!', 'Seu pedido foi recebido e logo sa??ra para entrega!');
    
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'ProductProgress'}],
      }),
    );
  }

  return (
    <Container>
      <View>
        <TextPrincipal>Endere??os Cadastrados</TextPrincipal>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={address}
        renderItem={({ item }) => {
          return (
            <ContainerAddress>
              <ContainerItemsAddress
                onPress={deleteCart}
              >
                <TextItem>
                  {item.street}, {item.number}
                </TextItem>
                <TextItem>
                  
                  {item.district}, {item.city}
                </TextItem>
                <TextItem> {item.reference} </TextItem>
              </ContainerItemsAddress>
              <ContainerIcons>
                <TouchableOpacity onPress={() => deleteAddress(item.id)}>
                  <Feather name="trash-2" size={25} color={'#000'} />
                </TouchableOpacity>
              </ContainerIcons>
              <Border />
            </ContainerAddress>
          );
        }}
      />
      <ContainerButtons>
        <CustomButtom onPress={() => navigation.navigate('AddAddress')}>
          <TextButton>ADICIONAR ENDERE??O</TextButton>
        </CustomButtom>
      </ContainerButtons>
    </Container>
  );
}
