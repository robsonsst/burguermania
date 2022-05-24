import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { CommonActions } from '@react-navigation/native';

import { Alert } from 'react-native';

import {
  Container,
  ImageLogo
} from './styles';

export default function Preload({navigation}){
  //Busca o usuário no cache
  const getUserCache = async () => {
    try{
      const jsonValue = await AsyncStorage.getItem('user');
      console.log('getUserCache');
      console.log(jsonValue);
      return  jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log('Preload: erro ao ler o user no cache: ' + e);
    }
  };

  const loginUser = async () => {
    const user = await getUserCache();
    
    if(user){

      auth().signInWithEmailAndPassword(user.email, user.password)
        .then(() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'MyBar'}],
            }),
          );                                
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
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'SignIn'}],
        }),
      );                                
    }
  }

  useEffect(() => {
    loginUser();
  }, []);

  return(
    <Container>
      <ImageLogo 
        source={require('../../assets/burguer-mania-logo.png')}
        accessibilityLabel = "logo do app"
      />
    </Container>
  );
}