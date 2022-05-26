import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import {  
  Alert, StyleSheet
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import { 
  Container,     
  TextPrincipal,
  ContainerInput, 
  Input,
  ContainerButton,  
  TextButton,
} from './styles';

export default function AddAddress({ navigation }) {
  
  const [city, setCity] = useState('');
  const [cep, setCep] = useState('');
  const [district, setDistrict] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');  
  const [reference, setReference] = useState('');

  let idCart;

  function verifications() {
    if (
      city === '' ||
      cep === '' ||
      district === '' ||
      street === '' ||
      number === '' ||
      reference === '' 
    ) {
      Alert.alert('ERRO', 'Campos vazios');
      return; //Não executa o que está abaixo
    }  
    //adiciona endereço no banco
    firestore().collection('address').add({      
      city: city,
      cep: cep,      
      district: district,
      street: street,
      number: number,
      reference: reference,
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
    navigation.navigate('Address');    
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
  }

  return (
    <Container>
 
      <TextPrincipal>LOCAL PARA ENTREGA</TextPrincipal>

      <ContainerInput>
        <Input          
          placeholder="Cidade"
          placeholderTextColor={'#BF8DB2'}
          value={city}
          onChangeText={(value) => setCity(value)}
        />
      </ContainerInput>      

      <TextInputMask
        style={styles.input}
        placeholder="CEP"
        placeholderTextColor={'#BF8DB2'}
        type='only-numbers'
        maxLength={8}        
        value={cep}
        onChangeText={(value) => setCep(value)}
      />

      <ContainerInput>
        <Input          
          placeholder="Bairro"
          placeholderTextColor={'#BF8DB2'}
          value={district}
          onChangeText={(value) => setDistrict(value)}
        />
      </ContainerInput>

      <ContainerInput>
        <Input          
          placeholder="Rua"
          placeholderTextColor={'#BF8DB2'}
          value={street}
          onChangeText={(value) => setStreet(value)}
        />
      </ContainerInput>           

      <ContainerInput>
        <Input          
          placeholder="Número"
          placeholderTextColor={'#BF8DB2'}
          value={number}
          onChangeText={(value) => setNumber(value)}
        />
      </ContainerInput>   

      <ContainerInput>
        <Input          
          placeholder="Referência"
          placeholderTextColor={'#BF8DB2'}
          value={reference}
          onChangeText={(value) => setReference(value)}
        />
      </ContainerInput>


      <ContainerButton        
        onPress={verifications}        
      >
        <TextButton>ADICIONAR ENDEREÇO</TextButton>
      </ContainerButton>      
    </Container>
  );
}

const styles = StyleSheet.create({
  input:{    
    width: '80%',
    height: 50,
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#BF8DB2',
    borderRadius: 7,    
    fontFamily: 'Anton_400Regular',
    fontSize: 18,
    color: '#FFF'    
  }
})