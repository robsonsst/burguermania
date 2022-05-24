import React from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

import {
  Container,
  Title,
  OptionsProfile,
  TextOptions,
  ButtonLogout,
  TextButton
} from './styles';

export default function Profile({navigation}) {  

  function signOut() {
    AsyncStorage.removeItem('user')
    .then(() => {
      auth()
        .signOut()
        .then(() => {})
        .catch((e) => {
          console.log('Profile, signOut em auth firebase: ' + e);
        });
        RNRestart.Restart();
    })
    .catch((e) => {
      console.log('Profile, signOut em removeItem: ' + e);
    });
  }

  return (
    <Container>
      <Title>Perfil</Title>

      <OptionsProfile onPress={() => navigation.navigate('Evaluate')}>
        <TextOptions>Avaliações</TextOptions>
      </OptionsProfile>
      
      <OptionsProfile onPress={() => navigation.navigate('ProductProgress')}>
        <TextOptions>Acompanhar pedido</TextOptions>
      </OptionsProfile>
      <ButtonLogout onPress={signOut}>
        <TextButton>Sair</TextButton>
      </ButtonLogout>
    </Container>
  );
}