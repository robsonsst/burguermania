import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import {  
  Alert
} from 'react-native';

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
    firestore().collection('address').add({      
      city: city,
      cep: cep,      
      district: district,
      street: street,
      number: number,
      reference: reference,
    });
    navigation.navigate('MyBar');
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

      <ContainerInput>
        <Input          
          placeholder="CEP"
          placeholderTextColor={'#BF8DB2'}
          value={cep}
          onChangeText={(value) => setCep(value)}
        />
      </ContainerInput>

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