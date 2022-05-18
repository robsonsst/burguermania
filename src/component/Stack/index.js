import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import auth from "@react-native-firebase/auth";

import { Image } from "react-native";

import MyBar from "../Tab";

//Pages
import HambDaCasa from "../../pages/HambDaCasa";
import Combos from "../../pages/Combos";
import MonteOSeu from "../../pages/MonteOSeu";
import Acompanhamentos from "../../pages/Acompanhamentos";
import Sobremesa from "../../pages/Sobremesa";
import Bebidas from "../../pages/Bebidas";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import Detail from "../../pages/Detail";
import Payment from "../../pages/Payment";
import AddCard from "../../pages/Payment/AddCard";
import Address from "../../pages/Address";
import Card from "../../pages/Payment/Card";
import AddAddress from "../../pages/Address/AddAddress";
import ProductProgress from "../../pages/ProductProgress";
import Preload from "../../pages/Preload";
import ResetPassword from "../../pages/ResetPassword";

const Stack = createNativeStackNavigator();

export default function MyStack() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;
  /*{user == null ? (
        <>
        />

          </>        
      )
      : (
        <>
</>
      )}

  */
  return (
    <Stack.Navigator initialRouteName="MyBar" >
      
      <Stack.Screen
        name="Preload"
        component={Preload}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="SignUp" 
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="ResetPassword" 
        component={ResetPassword}            
        options={{
          headerShown: false,
        }}
      />
  
      <Stack.Screen
        name="MyBar"
        component={MyBar}
        options={{
          headerTitle: (props) => (
            <Image
              style={{ width: 375, height: 80, marginBottom: 10 }}
              source={require("../../assets/burguer-mania-logo.png")}
              resizeMode="contain"
            />
          ),
          headerStyle: {
            backgroundColor: '#8c4e77',
          },
        }}
      />
      <Stack.Screen
        name="Hamburgueres Da Casa"
        component={HambDaCasa}
        options={{
          headerTitle: (props) => (
            <Image
              style={{ width: 250, height: 80, marginBottom: 10 }}
              source={require("../../assets/burguer-mania-logo.png")}
              resizeMode="contain"
            />
          ),
          headerStyle: {
            backgroundColor: '#8c4e77',
          },
        }}
      />
      <Stack.Screen
        name="Combos"
        component={Combos}
        options={{
          headerTitle: (props) => (
            <Image
              style={{ width: 250, height: 80, marginBottom: 10 }}
              source={require("../../assets/burguer-mania-logo.png")}
              resizeMode="contain"
            />
          ),
          headerStyle: {
            backgroundColor: '#8c4e77',
          },
        }}
      />
      <Stack.Screen
        name="Monte O Seu"
        component={MonteOSeu}
        options={{
          headerTitle: (props) => (
            <Image
              style={{ width: 250, height: 80, marginBottom: 10 }}
              source={require("../../assets/burguer-mania-logo.png")}
              resizeMode="contain"
            />
          ),
          headerStyle: {
            backgroundColor: '#8c4e77',
          },
        }}
      />
      <Stack.Screen
        name="Acompanhamentos"
        component={Acompanhamentos}
        options={{
          headerTitle: (props) => (
            <Image
              style={{ width: 250, height: 80, marginBottom: 10 }}
              source={require("../../assets/burguer-mania-logo.png")}
              resizeMode="contain"
            />
          ),
          headerStyle: {
            backgroundColor: '#8c4e77',
          },
        }}
      />
      <Stack.Screen
        name="Sobremesa"
        component={Sobremesa}
        options={{
          headerTitle: (props) => (
            <Image
              style={{ width: 250, height: 80, marginBottom: 10 }}
              source={require("../../assets/burguer-mania-logo.png")}
              resizeMode="contain"
            />
          ),
          headerStyle: {
            backgroundColor: '#8c4e77',
          },
        }}
      />
      <Stack.Screen
        name="Bebidas"
        component={Bebidas}
        options={{
          headerTitle: (props) => (
            <Image
              style={{ width: 250, height: 80, marginBottom: 10 }}
              source={require("../../assets/burguer-mania-logo.png")}
              resizeMode="contain"
            />
          ),
          headerStyle: {
            backgroundColor: '#8c4e77',
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTitle: (props) => (                
            <Image
              style={{ width: 250, height: 80, marginBottom: 10 }}
              source={require("../../assets/burguer-mania-logo.png")}
              resizeMode="contain"
            />                                  
          ),
          headerStyle: {
            backgroundColor: '#8c4e77',
          },
        }}
      />
      <Stack.Screen 
        name="Payment" 
        component={Payment}
        options={{
          headerTitle: (props) => (
            <Image
              style={{ width: 250, height: 80, marginBottom: 10 }}
              source={require("../../assets/burguer-mania-logo.png")}
              resizeMode="contain"
            />
          ),
          headerStyle: {
            backgroundColor: '#8c4e77',
          },                    
        }} 
      />
      <Stack.Screen 
        name="Card" 
        component={Card}
        options={{
          headerTitle: (props) => (
            <Image
              style={{ width: 250, height: 80, marginBottom: 10 }}
              source={require("../../assets/burguer-mania-logo.png")}
              resizeMode="contain"
            />
          ),
          headerStyle: {
            backgroundColor: '#8c4e77',
          },                    
        }} 
      />
      <Stack.Screen 
        name="AddCard" 
        component={AddCard}
        options={{
          headerTitle: (props) => (
            <Image
              style={{ width: 250, height: 80, marginBottom: 10 }}
              source={require("../../assets/burguer-mania-logo.png")}
              resizeMode="contain"
            />
          ),
          headerStyle: {
            backgroundColor: '#8c4e77',
          },                    
        }} 
      />
      <Stack.Screen 
        name="Address" 
        component={Address}
        options={{
          headerTitle: (props) => (
            <Image
              style={{ width: 250, height: 80, marginBottom: 10 }}
              source={require("../../assets/burguer-mania-logo.png")}
              resizeMode="contain"
            />
          ),
          headerStyle: {
            backgroundColor: '#8c4e77',
          },                    
        }} 
      />
      <Stack.Screen 
        name="AddAddress" 
        component={AddAddress}
        options={{
          headerTitle: (props) => (
            <Image
              style={{ width: 250, height: 80, marginBottom: 10 }}
              source={require("../../assets/burguer-mania-logo.png")}
              resizeMode="contain"
            />
          ),
          headerStyle: {
            backgroundColor: '#8c4e77',
          },                    
        }} 
      />
      <Stack.Screen 
        name="ProductProgress" 
        component={ProductProgress}
        options={{
          headerTitle: (props) => (
            <Image
              style={{ width: 250, height: 80, marginBottom: 10 }}
              source={require("../../assets/burguer-mania-logo.png")}
              resizeMode="contain"
            />
          ),
          headerStyle: {
            backgroundColor: '#8c4e77',
          },                    
        }} 
      />        
    </Stack.Navigator>
  );
}