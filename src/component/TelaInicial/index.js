import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';

import { StyleSheet } from 'react-native';

export default function TelaInicial(props) {
  return (
    <TouchableOpacity style={styled.container} onPress={props.onClick}>
      <Image style={styled.image} source={props.img} />

      <Text style={styled.textDescription}>{props.texto}</Text>
    </TouchableOpacity>
  );
}

export const styled = StyleSheet.create({
  container: {
    marginTop: 10,    
    paddingHorizontal: '1%', 
    alignItems: 'center',
    justifyContent: 'center',    
  },
  image: {
    width: 175,
    height: 175,
    margin: '2%',
    borderRadius: 10,
  },
  textDescription: {
    fontSize: 16,
    fontFamily: 'Anton_400Regular',
    color: '#000',
  },
})
