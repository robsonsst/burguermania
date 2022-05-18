import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { CommonActions } from '@react-navigation/native';

import { Alert } from 'react-native';

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
      email !== '' &&
      nome !== '' &&
      sobrenome !== '' &&
      usuario !== '' &&
      telefone !== '' &&
      password !== '' &&
      confirmPassword !== ''
    ) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() =>{
          let userFirebase = auth().currentUser;
          userFirebase.sendEmailVerification()
          .then(() => {
            Alert.alert('Informação', 'Foi enviado um e-mail para: ' + email + ' para verificação.');   
            navigation.navigate('SignIn');
          })
          .catch((e) =>{
            Alert.alert('SignUp', 'logon: ' + e);
          });          
        })
        .catch((e) => {
          console.log('SignUp: erro no cadastro: ' + e);
          switch(e.code){                        
            case 'auth/email-already-exists':
              Alert.alert('Erro', 'Este e-mail já está cadastrado!');
              break;
            case 'auth/invalid-email': 
              Alert.alert('Erro', 'Digite um e-mail válido');
              break;
            case 'auth/weak-password': 
              Alert.alert('Erro', 'Digite uma senha com mais de 6 caracteres');
              break;             
          }
        });              
    } else{
      Alert.alert('Erro', 'Por favor, digite nos campos para continuar.');
    }
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
          keyboardType="email-address"
          returnKeyType="next"
          value={email}          
          onChangeText={(value) => setEmail(value)}
          
        />
      </ContainerInput>

      <ContainerInput>
        <Input          
          placeholder="Nome"
          placeholderTextColor={'#BF8DB2'}
          value={nome}
          returnKeyType="next"
          onChangeText={(value) => setNome(value)}          
        />
      </ContainerInput>

      <ContainerInput>
        <Input                  
          placeholder="Sobrenome"
          placeholderTextColor={'#BF8DB2'}
          value={sobrenome}
          returnKeyType="next"
          onChangeText={(value) => setSobrenome(value)}
        />
      </ContainerInput>

      <ContainerInput>
        <Input                 
          placeholder="Nome de usuário"
          placeholderTextColor={'#BF8DB2'}
          value={usuario}
          returnKeyType="next"
          onChangeText={(value) => setUsuario(value)}          
        />
      </ContainerInput>

      <ContainerInput>
        <Input              
          placeholder="Telefone"
          placeholderTextColor={'#BF8DB2'}
          value={telefone}
          returnKeyType="next"
          onChangeText={(value) => setTelefone(value)}          
        />
      </ContainerInput>

      <ContainerInput>
        <Input           
          secureTextEntry={true}
          placeholder="Senha"
          placeholderTextColor={'#BF8DB2'}
          returnKeyType="next"
          value={password}
          onChangeText={(value) => setPassword(value)}          
        />
      </ContainerInput>

      <ContainerInput>
        <Input                
          secureTextEntry={true}
          placeholder="Confirmar Senha"
          placeholderTextColor={'#BF8DB2'}
          returnKeyType="go"
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
