import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo, Ionicons } from '@expo/vector-icons';

//Pages
import Home from '../../pages/Home';
import Cart from '../../pages/Cart';
import Favorites from '../../pages/Favorites';
import Profile from '../../pages/Profile';
import Chat from '../../pages/Chat';

const Tab = createBottomTabNavigator();

export default function MyBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#8c4e77',
          height: '6%',
        },
        tabBarActiveTintColor: '#fff000',
        tabBarInactiveTintColor: '#FFF',
      }}
    >
      <Tab.Screen
        name="Início"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Carrinho"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons
              name="chatbubble-ellipses-sharp"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
