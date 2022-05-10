import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { ThemeProvider } from 'styled-components';
import violetTheme from './src/theme/violet';
import AppLoading from 'expo-app-loading';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';

import Routes from './src/routes';

export default function App() {

  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });
  //Exibe um loading enquanto a fonte não carrega
  if(!fontsLoaded){
    return <AppLoading/>;
  }

  return (
    <ThemeProvider theme={violetTheme}>
      <NavigationContainer>      
        <StatusBar 
          barStyle="dark-content"
          backgroundColor={'#8c4e77'} 
          translucent={true}/>
        <Routes/>
      </NavigationContainer>
    </ThemeProvider>
    
  );
}