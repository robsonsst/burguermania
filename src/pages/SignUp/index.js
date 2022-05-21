import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { CommonActions } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import { TextInputMask } from 'react-native-masked-text';
import { Alert, StyleSheet } from 'react-native';

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
      if(password === confirmPassword){
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() =>{
            let userFirebase = auth().currentUser;
            
            //Persiste dados do usuário no firebase
            let user = {};
            user.email = email;
            user.nome = nome;          
            user.sobrenome = sobre;
            user.usuario = usuario;
            user.telefone = telefone;
  
            firestore()
              .collection('users')
              .doc(userFirebase.uid)
              .set(user)
              .then(() => {
                console.log('SignUp, logon : Usuário adicionado');
                
                //envia email de verificação
                userFirebase.sendEmailVerification()
                .then(() => {
                  Alert.alert('Informação', 'Foi enviado um e-mail para: ' + email + ' para verificação.');   
                  navigation.navigate('SignIn');
                })
                .catch((e) =>{
                  console.log('SignUp', 'logon: ' + e);
                });          
              })
              .catch((e) => {
                console.log('SignUp: erro no cadastro: ' + e);
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
        Alert.alert('Erro', 'As senhas informadas são diferentes. Por favor, digite senhas iguais para continuar');  
      }
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

      <TextInputMask
        style={styles.input} 
        placeholder="Telefone"
        placeholderTextColor={'#BF8DB2'}
        type={'cel-phone'}       
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) '
        }}

      />

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

const styles = StylesSheet.create({
  input: {
  width: '80%',
  height: 50,
  marginTop: 20,
  padding: 10,
  borderWidth: 1,
  borderColor: '#BF8DB2',
  borderRadius: 7,
  flexDirection: 'row',
  fontFamily: 'Anton_400Regular',
  fontSize: 18,
  color: '#FFF'
  }
})