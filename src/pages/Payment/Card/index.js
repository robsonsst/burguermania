import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import {
  Container,
  TextPrincipal,  
  ContainerCard,
  ContainerItemsCard,
  Border,
  TextItem,  
  ContainerIcons,
  ContainerButtons,
  CustomButtom,
  TextButton
} from './styles';

import firestore from '@react-native-firebase/firestore';

import { Feather } from "@expo/vector-icons";
import LoadingComponent from '../../../component/Loading';

export default function Address({ navigation }) {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

  //Busca os dados no firebase
  useEffect(() => {
    firestore()
      .collection('card')
      .get()
      .then((querySnapshot) => {
        let list = [];

        querySnapshot.forEach((doc) => {
          const cardItems = {
            id: doc.id,
            numberCard: doc.data().numberCard,
            validity: doc.data().validity,      
            cvv: doc.data().cvv,
            cardHolder: doc.data().cardHolder,
            cpf: doc.data().cpf,
            nickName: doc.data().nickName,
            selectedPayment: doc.data().selectedPayment            
          };

          list.push(cardItems);
        });
        setCard(list);
        setLoading(false);
      })
      .catch((e) => {
        console.log('Card, useEffect: ' + e);
      });
  }, []);

  //Deletar produto
  function deleteAddress(id){
    firestore().collection("card").doc(id).delete().then(() => {      
    })
  }

  return (
    <Container>
      
      <View><TextPrincipal>Cartões Cadastrados</TextPrincipal></View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={card}       
        renderItem={({ item }) => {
          return (            
            <ContainerCard>
              <ContainerItemsCard onPress={() => navigation.navigate("Address")}>                
                <TextItem> {item.nickName} - {item.selectedPayment} </TextItem>
                <TextItem> {item.numberCard} </TextItem>                
              </ContainerItemsCard>              
              <ContainerIcons>
                  <TouchableOpacity                
                    onPress={() => deleteAddress(item.id)}
                  >
                    <Feather name="trash-2" size={25} color={"#000"} />
                  </TouchableOpacity>                  
                </ContainerIcons>
                <Border/>
            </ContainerCard>
          );
        }}
      />
      <ContainerButtons>
        <CustomButtom onPress={() => navigation.navigate("AddCard")}>
          <TextButton>ADICIONAR CARTÃO</TextButton>
        </CustomButtom>        
      </ContainerButtons>
      {loading && <LoadingComponent/>}
    </Container>
  );
}