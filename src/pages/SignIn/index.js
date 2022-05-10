import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import SignUp from '../SignUp';

import {    
    TouchableOpacity,     
    View,
    Text
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

export default function SignIn({navigation}) {        

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);  
  const [errorSignIn, setErrorSignIn] = useState("");

  function signIn(){
    if(email === '' || password === ''){      
      setErrorSignIn(true);
      return; 
    };
    auth().signInWithEmailAndPassword(email, password);
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

      <TouchableOpacity>
        <TextResetPassword>esqueceu sua senha?</TextResetPassword>
      </TouchableOpacity>

      <ContainerButtons>
        <CustomButton onPress={signIn}>
          <TextCustomButton>ENTRAR</TextCustomButton>
        </CustomButton>
        <CustomButton onPress={() => navigation.navigate('SignUp')}>
          <TextCustomButton>CADASTRAR</TextCustomButton>
        </CustomButton>
      </ContainerButtons>

      <TextOtherOptions>-------------------- Ou -------------------</TextOtherOptions>
      
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