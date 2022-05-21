import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

import { View, FlatList,Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import {
  Container,
  Title,
  Items,
  ProductImage,
  ContainerTexts,
  ProductText,    
  CustomButton,
  CustomButtonText,
} from './styles';
import PickerCheese from '../../component/picker/PickerCheese';

export default function MonteOSeu(props) {

  const [monteOSeu, setMonteOSeu] = useState([]);

  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');  
  const [price, setPrice] = useState('');
  const [notes, setNotes] = useState('');
  const [breadType, setBreadType] = useState('');
  const [cheeseType, setCheeseType] = useState([]);
  const [sauceType, setTypeSauce] = useState([]);
  const [beefSelected, setBeefSelected] = useState(['Mal passada', 'Bem passada']);
  const [cheeseQuantity, setCheeseQuantity] = useState('');

  let pao;  

  //Busca os dados no firebase
  useEffect(() => {
  
    firestore()
      .collection('monteOSeu')
      .orderBy('pos')
      .get()
      .then((querySnapshot) => {
  
        let list = [];
  
        querySnapshot.forEach((doc) => {          
                         
          const opcoes = {
  
            id: doc.id,
            image: doc.data().image,
            title: doc.data().title,            
            price: doc.data().price,
          };
  
          list.push(opcoes);     
        });
        setMonteOSeu(list);
      })
      .catch((e) => {
  
        console.log('Monte O Seu, useEffect: ' + e);
      });
  }, []);

  //Arredonda casas decimais para 2
  function approach(n) {
    return (Math.round(n * 100) / 100).toFixed(2);
  }

  //const priceCart = counter * price;

  //Adiciona valores ao banco de dados
  function addCartFirebase() {
    firestore().collection('cart').add({      
      image: image,
      title: title,      
      price: price,
      notes: notes,
    });
    navigation.navigate('Carrinho');
  }
  return (
    <Container>
      <Title>Monte o seu Hambúrguer</Title>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={monteOSeu}        
        renderItem={({ item }) => {
          return (
            pao = item.title,
            <Items>              
                <ProductImage
                  source={{ uri: item.image }}                  
                />
                <ContainerTexts>
                  <ProductText> {item.title} </ProductText>                 
                  <ProductText>R$ {item.price}</ProductText>
                  {                    
                    pao === 'Pão' ?
                      <PickerCheese
                      selectedValue={sauceType}
                      onValueChange={(itemSelect, indexItem) => {
                        setSauceType(itemSelect);                        
                        console.log(this.props.sauceType);
                      }}        
                      />
                    : console.log(pao)
                  }              
                  
                </ContainerTexts>                            
            </Items>
          );
        }}
      />
      <View>
        <Title>SUBTOTAL R$ </Title>
        <CustomButton>
          <CustomButtonText>ADICIONAR AO CARRINHO</CustomButtonText>
        </CustomButton>
      </View>
    </Container>
  );
}
