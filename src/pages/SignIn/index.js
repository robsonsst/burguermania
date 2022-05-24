import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {    
    TouchableOpacity,      
    Alert
} from 'react-native';

import { Feather, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'

import { 
  Container,
  ImageLogo,
  TextPrincipal,
  ContainerInputEmail,
  Input,
  ContainerInputPassword,
  TextResetPassword,
  ContainerButtons,
  CustomButton,
  TextCustomButton,
  TextOtherOptions,
  ContainerButtonSocial,
  ButtonSocial  
} from './styles';

/*
const [errorSignIn, setErrorSignIn] = useState("");

setErrorSignIn(true);

{errorSignIn === true
?      
<View style={{flexDirection:"row", marginTop: 10}}>
  <MaterialCommunityIcons 
    name="alert-circle"
    size={24}
    color="#FFF"
  />
  <Text>  Há Campos vazios!</Text>
</View>
:
<View/>
}
  TODO: retirar se for usar somente o alert
*/

export default function SignIn({navigation}) {        

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);  
  

  const storeUserCache = async (value) => {
    try{
      value.password = password;
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user', jsonValue);

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'MyBar'}],
        }),
      ); 
    } catch(e) {
      console.log('SignIn: erro em storeUserCache: ' + e);
    }
  }

  //Busca dados do usuário
  function getUser(){
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then((doc) => {
        if(doc.exists) {          
          storeUserCache(doc.data());
        } else {
          console.log('O documento não existe na base de dados');
        } 
      })
      .catch((e) => {
        console.log('SignIn: erro em getUser: ' + e);
      });
  }  

  function signIn(){
    if(email !== '' && password !== ''){      

      auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        if(!auth().currentUser.emailVerified){
          Alert.alert('Erro', 'Você deve verificar o seu email para prosseguir.');
          return;
        }
        getUser();                               
      })
      .catch((e) => {
        console.log('SignIn: erro ao entrar: ' + e);
        switch(e.code){
          case 'auth/user-not-found': 
            Alert.alert('Erro', 'Usuário não cadastrado.');
            break;                
          case 'auth/wrong-password':
            Alert.alert('Erro', 'Senha incorreta!');
            break;
          case 'auth/invalid-email': 
            Alert.alert('Erro', 'Digite um e-mail válido');
            break;
        }
      });
    } else {
      Alert.alert('Erro' , 'Por favor, digite e-mail e senha para continuar.');
    }
  };

  function signUp(){
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'SignUp'}],
      }),
    );
  };

  function resetPassword(){
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'ResetPassword'}],
      }),
    );
  }

  return (
    <Container>
      <ImageLogo
        source={require('../../../assets/icon.png')}        
      />

      <TextPrincipal>Faça login para continuar</TextPrincipal>

      <ContainerInputEmail> 
        <Input           
          placeholder="E-mail ou nome de usuário"
          placeholderTextColor={'#BF8DB2'}
          value={email}
          onChangeText={value => setEmail(value)}
        />

        <Fontisto
            name="email"
            size={25}
            color={'#BF8DB2'}
        />
      </ContainerInputEmail>

      <ContainerInputPassword> 
        <Input          
          placeholder="Senha"
          placeholderTextColor={"#BF8DB2"}
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={!passwordIsVisible}
        />

        <TouchableOpacity
          onPress={() => setPasswordIsVisible(!passwordIsVisible)}          
        >
          <Feather
            name="eye"
            size={25}
            color={"#BF8DB2"}
          />          
        </TouchableOpacity>              
      </ContainerInputPassword>      

      <TouchableOpacity onPress={resetPassword}>
        <TextResetPassword>esqueceu sua senha?</TextResetPassword>
      </TouchableOpacity>

      <ContainerButtons>
        <CustomButton onPress={signIn}>
          <TextCustomButton>ENTRAR</TextCustomButton>
        </CustomButton>
        <CustomButton onPress={signUp}>
          <TextCustomButton>CADASTRAR</TextCustomButton>
        </CustomButton>
      </ContainerButtons>

      <TextOtherOptions>Ou faça login com redes sociais</TextOtherOptions>
      
      <ContainerButtonSocial>
        <ButtonSocial>
          <TextCustomButton>CONTINUAR COM O GOOGLE</TextCustomButton>
        </ButtonSocial>
        <ButtonSocial>
          <TextCustomButton>CONTINUAR COM O TWITTER</TextCustomButton>
        </ButtonSocial>
        <ButtonSocial>
          <TextCustomButton>CONTINUAR COM O FACEBOOK</TextCustomButton>
        </ButtonSocial>
      </ContainerButtonSocial>      
    </Container>
  );
}