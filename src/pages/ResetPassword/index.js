import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

import {
  Container,
  Title,
  ContainerInput,
  Input,
  TextSignIn,
  CustomButton,
  TextCustomButton,
} from './styles';
import { Alert, TouchableOpacity } from 'react-native';

export default function ResetPassword({ navigation }) {
  const [email, setEmail] = useState('');

  function recover() {
    if (email !== '') {
      console.log(email);
      auth()
        .sendPasswordResetEmail(email)
        .then((r) => {
          Alert.alert(
            'Atenção',
            'Enviamos um e-mail de recuperação de senha para o seguinte endereço: ' +
              email,
            [{ text: 'OK', onPress: () => navigation.navigate('SignIn') }]
          );
        })
        .catch((e) => {
          console.log('ResetPassword: erro ao verificar e-mail: ' + e);
          switch (e.code) {
            case 'auth/user-not-found':
              Alert.alert('Erro', 'Usuário não cadastrado.');
              break;            
            case 'auth/invalid-email':
              Alert.alert('Erro', 'Digite um e-mail válido.');
              break;
          }
        });
    } else {
      Alert.alert(
        'Erro',
        'Por favor, digite um e-mail cadastrado para continuar.'
      );
    }
  }

  return (
    <Container>      
      <Title>
        Digite seu e-mail e enviaremos um link para redefinição de senha.
      </Title>

      <ContainerInput>
        <Input
          placeholder="E-mail de acesso"
          placeholderTextColor={'#BF8DB2'}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
      </ContainerInput>

      <CustomButton onPress={recover}>
        <TextCustomButton>ENVIAR</TextCustomButton>
      </CustomButton>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <TextSignIn>VOLTAR PARA A TELA DE LOGIN</TextSignIn>
      </TouchableOpacity>
    </Container>
  );
}
