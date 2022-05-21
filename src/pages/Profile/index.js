import React from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

import {
  ButtonLogout,
  TextButton
} from './styles';

export default function Profile() {

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
    <View>
        <Text>Página do perfil</Text>
        <ButtonLogout onPress={signOut}>
          <TextButton>Página do perfil</TextButton>
        </ButtonLogout>
    </View>
  );
}