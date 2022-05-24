import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import {
  Container,
  TextPrincipal,
  ContainerTouchable,
  ContainerImage,
  Border,
  TextTitle,
  TextDescription,
  TextPrice,
} from './styles';

import firestore from '@react-native-firebase/firestore';

import { CommonActions } from '@react-navigation/native';
import LoadingComponent from '../../component/Loading';

export default function Acompanhamentos({ navigation }) {
  
  const [acompanhamentos, setAcompanhamentos] = useState([]);
  const [loading, setLoading] = useState(true);

  //Busca os dados no firebase
  useEffect(() => {
  
    firestore()
      .collection('acompanhamentos')
      .orderBy('pos')
      .get()
      .then((querySnapshot) => {
  
        let list = [];
  
        querySnapshot.forEach((doc) => {
  
          const acomp = {
  
            id: doc.id,
            image: doc.data().image,
            title: doc.data().title,
            description: doc.data().description,
            price: doc.data().price,
          };
  
          list.push(acomp);     
        });
        setAcompanhamentos(list);
        setLoading(false);
      })
      .catch((e) => {
        console.log('Acompanhamentos, useEffect: ' + e);
      });
  }, []);

  return (
    <Container>
      <TextPrincipal>Acompanhamentos</TextPrincipal>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={acompanhamentos}
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
                  <TextTitle> {item.title} </TextTitle>
                  <TextDescription> {item.description} </TextDescription>
                  <TextPrice>R$ {item.price}</TextPrice>
                </View>
              </ContainerTouchable>
              <Border/>
            </View>
          );
        }}
      />
      {loading && <LoadingComponent/>}
    </Container>
  );
}