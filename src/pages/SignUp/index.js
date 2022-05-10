import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

import {  
  Alert
} from 'react-native';

import { 
  Container, 
  ImageLogo, 
  TextPrincipal,
  ContainerInput, 
  Input,
  ContainerButton,
  TextButtonSignUp,
  MessageButtonSignIn,
  TextMessageButtonSignIn,
  TextMessageButtonSignInBold
} from './styles';

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function logon() {
    if (
      email === '' ||
      nome === '' ||
      sobrenome === '' ||
      usuario === '' ||
      telefone === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      Alert.alert('ERRO', 'Campos vazios');
      return; //Não executa o que está abaixo
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => Alert.alert(error.code, error.message));      
  }  

  return (
    <Container>
      <ImageLogo
        source={require('../../../assets/icon.png')}        
      />

      <TextPrincipal>DADOS DO CADASTRO</TextPrincipal>

      <ContainerInput>
        <Input          
          placeholder="E-mail"
          placeholderTextColor={'#BF8DB2'}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
      </ContainerInput>

      <ContainerInput>
        <Input          
          placeholder="Nome"
          placeholderTextColor={'#BF8DB2'}
          value={nome}
          onChangeText={(value) => setNome(value)}
        />
      </ContainerInput>

      <ContainerInput>
        <Input          
          placeholder="Sobrenome"
          placeholderTextColor={'#BF8DB2'}
          value={sobrenome}
          onChangeText={(value) => setSobrenome(value)}
        />
      </ContainerInput>

      <ContainerInput>
        <Input          
          placeholder="Nome de usuário"
          placeholderTextColor={'#BF8DB2'}
          value={usuario}
          onChangeText={(value) => setUsuario(value)}
        />
      </ContainerInput>

      <ContainerInput>
        <Input          
          placeholder="Telefone"
          placeholderTextColor={'#BF8DB2'}
          value={telefone}
          onChangeText={(value) => setTelefone(value)}
        />
      </ContainerInput>

      <ContainerInput>
        <Input          
          placeholder="Senha"
          placeholderTextColor={'#BF8DB2'}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
      </ContainerInput>

      <ContainerInput>
        <Input          
          placeholder="Confirmar Senha"
          placeholderTextColor={'#BF8DB2'}
          value={confirmPassword}
          onChangeText={(value) => setConfirmPassword(value)}
        />
      </ContainerInput>

      <ContainerButton        
        onPress={logon}        
      >
        <TextButtonSignUp>REALIZAR CADASTRO</TextButtonSignUp>
      </ContainerButton>

      <MessageButtonSignIn
        onPress={() => navigation.navigate('SignIn')}
      >
        <TextMessageButtonSignIn>Já tem uma conta?
        </TextMessageButtonSignIn>
        <TextMessageButtonSignInBold> LOGAR-SE</TextMessageButtonSignInBold>
      </MessageButtonSignIn>
    </Container>
  );
}
