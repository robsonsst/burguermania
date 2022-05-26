import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, TouchableOpacity, RefreshControl } from 'react-native';



import {
  Container,
  Title,
  ContainerFavorite,
  ContainerProduct,
  ProductImage,
  Border,
  TextBurguer,
  TextNotes,
  TextPrice
} from './styles';

import firestore from '@react-native-firebase/firestore';

import { Feather } from '@expo/vector-icons';
import LoadingComponent from '../../component/Loading';

export default function Cart({ navigation }) {
  const [favorite, setFavorite] = useState([]);  
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const onRefresh = () => {
    setRefreshing(true);
    
    setTimeout(()=>{
      setRefreshing(false)
    },1000)    
  };

  //Busca os dados no firebase
  useEffect(() => {
    firestore()
      .collection('favorite')
      .get()
      .then((querySnapshot) => {
        let list = [];

        querySnapshot.forEach((doc) => {
          const favoriteItems = {
            id: doc.id,
            image: doc.data().image,
            title: doc.data().title,
            notes: doc.data().notes,
            price: doc.data().price
          };
          list.push(favoriteItems);
        });
        setFavorite(list);       
        setLoading(false);    
      })
      .catch((e) => {
        console.log('Favorite, useEffect: ' + e);
      });
  }, []);

  //Deletar produto
  function deleteFavorite(id) {
    firestore()
      .collection('favorite')
      .doc(id)
      .delete()
      .then(() => {});      
  }

  return (
    <Container>
      <View>
        <Title>Favoritos</Title>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favorite}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing}
            onRefresh={()=> onRefresh()}
          />
        }
        renderItem={({ item }) => {
          return (
            <ContainerFavorite>
              <ContainerProduct>
                <ProductImage source={{ uri: item.image }} />
                <View>
                  <TextBurguer> {item.title} </TextBurguer>
                  <TextNotes> {item.notes} </TextNotes>
                  <TextPrice> R$ {item.price}</TextPrice>
                </View>
              </ContainerProduct>
              <TouchableOpacity style ={{alignSelf : 'flex-end'}} onPress={() => deleteFavorite(item.id)}>
                <Feather name="trash-2" size={25} color={'#000'} />
              </TouchableOpacity>
              <Border />
            </ContainerFavorite>
          );
        }}
      />

      {loading && <LoadingComponent/>}
    </Container>
  );
}
