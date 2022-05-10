import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import {
  Container,
  TextPrincipal,
  ContainerTouchable,
  ContainerImage,
  Border,
  TextBurguer,
  TextDescription,
  TextPrice,
} from './styles';

import firestore from '@react-native-firebase/firestore';

import { CommonActions } from '@react-navigation/native';

export default function HambDaCasa({ navigation }) {
  
  const [hambDaCasa, setHambDaCasa] = useState([]);

  //Busca os dados no firebase
  useEffect(() => {
  
    firestore()
      .collection('hambDaCasa')
      .orderBy('pos')
      .get()
      .then((querySnapshot) => {
  
        let list = [];
  
        querySnapshot.forEach((doc) => {
  
          const hamburgueres = {
  
            id: doc.id,
            image: doc.data().image,
            title: doc.data().title,
            description: doc.data().description,
            price: doc.data().price,
          };
  
          list.push(hamburgueres);     
        });
        setHambDaCasa(list);
      })
      .catch((e) => {
  
        console.log('Hamburgueres da Casa, useEffect: ' + e);
      });
  }, []);

  return (
    <Container>
      <TextPrincipal>Hamburgueres da Casa</TextPrincipal>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={hambDaCasa}
        renderItem={({ item }) => {
          return (
            <View>
              <ContainerTouchable
                onPress={() =>
                  navigation.dispatch(
                    CommonActions.navigate({
                      name: 'Detail',
                      params: {
                        id: item.id,
                        image: item.image,
                        title: item.title,
                        description: item.description,
                        price: item.price,
                      },
                    })
                  )
                }
              >
                <ContainerImage
                  source={{ uri: item.image }}                  
                />
                <View>
                  <TextBurguer> {item.title} </TextBurguer>
                  <TextDescription> {item.description} </TextDescription>
                  <TextPrice>R$ {item.price}</TextPrice>
                </View>
              </ContainerTouchable>
              <Border/>
            </View>
          );
        }}
      />
    </Container>
  );
}