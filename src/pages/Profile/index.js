import React from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Profile() {
 return (
   <View>
       <Text>Página do perfil</Text>
       <Button title="sair" onPress={() => auth().signOut()} />
   </View>
  );
}