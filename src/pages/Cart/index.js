import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, TouchableOpacity, RefreshControl } from 'react-native';

import Loading from '../../components/Loading';

import {
  Container,
  TextPrincipal,
  ContainerCart,
  ContainerProduct,
  ProductImage,
  Border,
  TextBurguer,
  TextNotes,
  TextPrice,
  ContainerIcons,
  ContainerButtons,
  CustomButtom,
  TextButton,
} from './styles';

import firestore from '@react-native-firebase/firestore';

import { FontAwesome, Feather } from '@expo/vector-icons';

export default function Cart({ navigation }) {
  const [cart, setCart] = useState([]);  
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const wait = (timeout) => {
    return new Promise((resolver) => setTimeout(resolver, timeout * 1000));
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await wait(2);
    setRefreshing(false);
  }, []);

  //Busca os dados no firebase
  useEffect(() => {
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
            favorite: false
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

  //Deletar produto
  function deleteProductCart(id) {
    firestore()
      .collection('cart')
      .doc(id)
      .delete()
      .then(() => {});
  }
  
  function setFavorite(id){
    const cartUpdate = card.map(item => {
      return {
        id: doc.id,
        image: item.image,
        title: item.title,
        notes: item.notes,
        price: item.price,
        favorite: !item.favorite
      }
    });
    setCart(cartUpdate);
  }

  return (
    <Container>
      <View>
        <TextPrincipal>Carrinho</TextPrincipal>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => {
          return (
            <ContainerCart>
              <ContainerProduct>
                <ProductImage source={{ uri: item.image }} />
                <View>
                  <TextBurguer> {item.title} </TextBurguer>
                  <TextNotes> {item.notes} </TextNotes>
                  <TextPrice> R$ {item.price}</TextPrice>
                </View>
              </ContainerProduct>
              <ContainerIcons>
                <TouchableOpacity onPress={() => deleteProductCart(item.id)}>
                  <Feather name="trash-2" size={25} color={'#000'} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setFavorite(item.id)}
                  style={{ marginLeft: 15 }}
                >
                  <FontAwesome
                    name={item.favorite ? 'star' : 'star-o'}
                    size={25}
                    color={'#000'}
                  />
                </TouchableOpacity>
              </ContainerIcons>
              <Border />
            </ContainerCart>
          );
        }}
      />
      <ContainerButtons>
        <CustomButtom onPress={() => navigation.navigate('Payment')}>
          <TextButton>EFETUAR COMPRA</TextButton>
        </CustomButtom>
        <CustomButtom onPress={() => navigation.navigate('ProductProgress')}>
          <TextButton>ACOMPANHAR PEDIDO</TextButton>
        </CustomButtom>
      </ContainerButtons>

      {loading && <Loading/>}
    </Container>
  );
}
