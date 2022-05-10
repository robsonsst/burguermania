import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, TouchableOpacity, RefreshControl } from 'react-native';

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
  TextButton
} from './styles';

import firestore from '@react-native-firebase/firestore';

import { FontAwesome, Feather } from "@expo/vector-icons";

export default function Cart({ navigation }) {
  const [cart, setCart] = useState([]);

  const [favorite, setFavorite] = useState(true); 
  
  const [refreshing, setRefreshing] = useState(false);

  let idCart;

  const wait = timeout => {
    return new Promise(resolver => setTimeout(resolver, timeout * 1000));
  }

  const onRefresh = useCallback(async() =>{
    setRefreshing(true);
    await wait(2);
    setRefreshing(false);
  },[])
  
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
          };          
          list.push(cartItems);
          idCart = cartItems.id;
        });
        setCart(list);      
      })
      .catch((e) => {
        console.log('Cart, useEffect: ' + e);
      });
  }, []);

  //Deletar produto
  function deleteProductCart(id){
    firestore().collection("cart").doc(id).delete().then(() => {      
    })
  }

  function deleteCart(){
    firestore()
    .collection('cart')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((idCart)=>{                
        idCart.ref.delete();
      })
    })
  }

  return (
    <Container>
      
      <View><TextPrincipal>Carrinho</TextPrincipal></View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart}
        refreshControl={
          <RefreshControl 
          refreshing={refreshing} 
          onRefresh={onRefresh}
          />
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
                  <TouchableOpacity                
                    onPress={() => deleteProductCart(item.id)}
                  >
                    <Feather name="trash-2" size={25} color={"#000"} />
                  </TouchableOpacity>
                  <TouchableOpacity                
                    onPress={() => setFavorite(!favorite)}
                    style={{marginLeft: 15}}                    
                  >                    
                    <FontAwesome name= {favorite ? "star" : "star-o"} size={25} color={"#000"}/>
                  </TouchableOpacity>
                </ContainerIcons>
                <Border/>
            </ContainerCart>
          );
        }}
      />
      <ContainerButtons>        
        <CustomButtom onPress={() => navigation.navigate("Payment")}>
            <TextButton>EFETUAR COMPRA</TextButton>
          </CustomButtom>
          <CustomButtom onPress={deleteCart}>
            <TextButton>ACOMPANHAR PEDIDO</TextButton>
          </CustomButtom>        
      </ContainerButtons>
    </Container>
  );
}