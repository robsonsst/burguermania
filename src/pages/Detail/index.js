import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import {
  Container,
  ContainerImage,
  TextBurguer,
  TextDescription,
  TextPrice,
  ContainerNotes,
  TextNotes,
  ContainerInputNotes,
  InputNotes,
  ContainerAddCart,
  ContainerCounter,
  ButtonCounterCart,
  TextButtonCounterCart,
  TextQuantityCart,
  ButtonAddCart,
  TextButtonAddCart,
} from './styles';

import { Entypo } from '@expo/vector-icons';

export default function Detail({ navigation, route }) {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [notes, setNotes] = useState('');

  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    {
      counter >= 1 ? setCounter(counter - 1) : <></>;
    }
  }

  //Arredonda casas decimais para 2
  function approach(n) {
    return (Math.round(n * 100) / 100).toFixed(2);
  }

  const priceCart = counter * price;

  //Adiciona valores ao banco de dados
  function addCartFirebase() {
    firestore().collection('cart').add({      
      image: image,
      title: title,      
      price: priceCart,
      notes: notes,
    });
    navigation.navigate('Carrinho');
  }

  useEffect(() => {
    setImage(route.params.image);
    setTitle(route.params.title);
    setDescription(route.params.description);
    setPrice(route.params.price);
  }, []);

  return (
    <Container>
      <ContainerImage
        source={image ? { uri: image } : null}
        resizeMode="cover"
      />
      <View>
        <TextBurguer>{title}</TextBurguer>
        <TextDescription>{description}</TextDescription>
        <TextPrice> {price} </TextPrice>
      </View>

      <ContainerNotes>
        <Entypo name="new-message" size={25} color={'#000'} />

        <TextNotes>Observações?</TextNotes>
      </ContainerNotes>

      <ContainerInputNotes>
        <InputNotes
          placeholder="Ex: Sem cebola, sem tomate, etc."
          placeholderTextColor={'#BF8DB2'}
          value={notes}
          onChangeText={(value) => setNotes(value)}
        />
      </ContainerInputNotes>

      <ContainerAddCart>
        <ContainerCounter>
          <ButtonCounterCart onPress={decrement}>
            <TextButtonCounterCart>-</TextButtonCounterCart>
          </ButtonCounterCart>

          <TextQuantityCart>{counter}</TextQuantityCart>

          <ButtonCounterCart onPress={increment}>
            <TextButtonCounterCart>+</TextButtonCounterCart>
          </ButtonCounterCart>
        </ContainerCounter>

        {counter === 0 ? (
          <ButtonAddCart
            onPress={addCartFirebase}
            disabled={true}
            style={{ backgroundColor: '#8D8686' }}
          >
            <TextButtonAddCart>Adicionar</TextButtonAddCart>
            <TextButtonAddCart> R$ {approach(priceCart)} </TextButtonAddCart>
          </ButtonAddCart>
        ) : (
          <ButtonAddCart onPress={addCartFirebase}>
            <TextButtonAddCart>Adicionar</TextButtonAddCart>
            <TextButtonAddCart> R$ {approach(priceCart)} </TextButtonAddCart>
          </ButtonAddCart>
        )}
      </ContainerAddCart>
    </Container>
  );
}
