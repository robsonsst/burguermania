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
  TextButton 
} from './styles';

export default function AddCard({ navigation }) {
  
  const [numberCard, setnumberCard] = useState('');
  const [validity, setValidity] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cpf, setCpf] = useState('');
  const [nickName, setNickName] = useState('');  

  function verifications() {
    if (
      numberCard === '' ||
      validity === '' ||
      cvv === '' ||
      cardHolder === '' ||
      cpf === '' ||
      nickName === ''
    ) {
      Alert.alert('ERRO', 'Campos vazios');
      return; //Não executa o que está abaixo
    }  
    firestore().collection('card').add({      
      numberCard: numberCard,
      validity: validity,      
      cvv: cvv,
      cardHolder: cardHolder,
      cpf: cpf,
      nickName: nickName,
    });
    navigation.navigate('AddAddress');
  }

  return (
    <Container>            

      <TextPrincipal>DADOS DO CARTÃO</TextPrincipal>

      <ContainerInput>
        <Input          
          placeholder="Número do Cartão"
          placeholderTextColor={'#BF8DB2'}
          value={numberCard}
          onChangeText={(value) => setnumberCard(value)}
        />
      </ContainerInput>

      <ContainerInput>
        <Input          
          placeholder="Validade"
          placeholderTextColor={'#BF8DB2'}
          value={validity}
          onChangeText={(value) => setValidity(value)}
        />
      </ContainerInput>

      <ContainerInput>
        <Input          
          placeholder="CVV"
          placeholderTextColor={'#BF8DB2'}
          value={cvv}
          onChangeText={(value) => setCvv(value)}
        />
      </ContainerInput>

      <ContainerInput>
        <Input          
          placeholder="Nome do titular"
          placeholderTextColor={'#BF8DB2'}
          value={cardHolder}
          onChangeText={(value) => setCardHolder(value)}
        />
      </ContainerInput>

      <ContainerInput>
        <Input          
          placeholder="CPF"
          placeholderTextColor={'#BF8DB2'}
          value={cpf}
          onChangeText={(value) => setCpf(value)}
        />
      </ContainerInput>

      <ContainerInput>
        <Input          
          placeholder="Apelido"
          placeholderTextColor={'#BF8DB2'}
          value={nickName}
          onChangeText={(value) => setNickName(value)}
        />
      </ContainerInput>      

      <ContainerButton        
        onPress={verifications}        
      >
        <TextButton>ADICIONAR CARTÃO</TextButton>
      </ContainerButton>

      <ContainerButton                
        onPress={() => navigation.navigate('Payment')}
      >
        <TextButton>OUTRA FORMA DE PAGAMENTO</TextButton>
      </ContainerButton>
    </Container>
  );
}