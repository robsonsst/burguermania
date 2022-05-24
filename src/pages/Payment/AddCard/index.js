import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

import firestore from '@react-native-firebase/firestore';

import {  
  Alert, View, StyleSheet
} from 'react-native';

import { 
  Container,   
  TextPrincipal,
  ContainerInput, 
  Input,
  ContainerButton, 
  TextButton 
} from './styles';

import { TextInputMask } from 'react-native-masked-text';

export default function AddCard({ navigation }) {
  
  const [numberCard, setNumberCard] = useState('');
  const [validity, setValidity] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cpf, setCpf] = useState('');
  const [nickName, setNickName] = useState('');  
  const [selectedPayment, setSelectedPayment] = useState('');   
  //TODO: corrigir select de pagamento  

  function verifications() {
    if (
      numberCard === '' ||
      validity === '' ||
      cvv === '' ||
      cardHolder === '' ||
      cpf === '' ||
      nickName === '' ||
      selectedPayment === ''
    ) {
      Alert.alert('ERRO', 'Campos vazios');
      return; //Não executa o que está abaixo
    }  
    cpfValid();
    firestore().collection('card').add({      
      numberCard: numberCard,
      validity: validity,      
      cvv: cvv,
      cardHolder: cardHolder,
      cpf: cpf,
      nickName: nickName,
      selectedPayment: selectedPayment,      
    });
    navigation.navigate('Card');
  }  

  return (
    <Container>            

      <TextPrincipal>DADOS DO CARTÃO</TextPrincipal>      

      <TextInputMask
        style={styles.input}
        placeholder="Número do Cartão"
        placeholderTextColor={'#BF8DB2'}
        type='credit-card'
        options={{
          obfuscaded: false,
          issuer: 'visa-or-mastercard'
        }}
        value={numberCard}
        onChangeText={(value) => setNumberCard(value)}
      />      

      <TextInputMask
        style={styles.input}
        placeholder="Validade"
        placeholderTextColor={'#BF8DB2'}
        type='datetime'
        options={{
          format: 'MM/YYYY'
        }}
        value={validity}
        onChangeText={(value) => setValidity(value)}
      />      

      <TextInputMask
        style={styles.input}
        placeholder="CVV"
        placeholderTextColor={'#BF8DB2'}
        type='only-numbers'
        maxLength={3}
        value={cvv}
        onChangeText={(value) => setCvv(value)}
      />

      <ContainerInput>
        <Input          
          placeholder="Nome do titular"
          placeholderTextColor={'#BF8DB2'}
          value={cardHolder}
          onChangeText={(value) => setCardHolder(value)}
        />
      </ContainerInput>            

      <TextInputMask
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor={'#BF8DB2'}
        type='cpf'
        value={cpf}
        onChangeText={(value) => setCpf(value)}
      />

      <ContainerInput>
        <Input          
          placeholder="Apelido"
          placeholderTextColor={'#BF8DB2'}
          value={nickName}
          onChangeText={(value) => setNickName(value)}
        />
      </ContainerInput>   

      <View>
        <Picker style={styles.picker}
          selectedValue={selectedPayment}
          onValueChange={(item, indexItem) => {            
              setSelectedPayment(item);            
          }}          
        >
          <Picker.Item key={0} label={"Selecione uma forma de pagamento"} value={" "}/>
          <Picker.Item key={1} label={"Crédito"} value={"Crédito"}/>
          <Picker.Item key={2} label={"Débito"} value={"Débito"}/>          
        </Picker>  
      </View>

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

const styles = StyleSheet.create({
  input:{
    alignSelf: 'center',
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
  },
  picker:{
    alignSelf: 'center',
    width: 340, 
    height: 90,    
    color: '#BF8DB2',
  }
})