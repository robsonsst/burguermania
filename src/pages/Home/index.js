import React from 'react';

import { ScrollView, Image, TouchableOpacity } from 'react-native';

import TelaInicial from '../../component/TelaInicial';
import { Container, TextPrincipal, ItemScroll } from './styles';

export default function Home({ navigation }) {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <TextPrincipal>Promoções do dia</TextPrincipal>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={{width: 365, height: 170, marginLeft: 12, marginRight: 30, backgroundColor: '#fca941', borderRadius: 10}}>
          <Image style={{width: '60%', height: 185, alignSelf: 'center'}} source={require('../../assets/promocaoPg2Leve3.jpg')}/>          
        </TouchableOpacity>
        <TouchableOpacity style={{width: 365, height: 170, marginLeft: 10, marginRight: 10, backgroundColor: '#fca941', borderRadius: 10}}>
          <Image style={{width: '60%', height: 185, alignSelf: 'center'}} source={require('../../assets/promocaoPg2Leve3.jpg')}/>          
        </TouchableOpacity>        
      </ScrollView>      
      
      <ItemScroll>
        <TelaInicial
          img={require('../../assets/hamburgueres-da-casa.jpeg')}
          texto="Hamburgueres Da Casa"
          onClick={() => navigation.navigate('Hamburgueres Da Casa')}
        />

        <TelaInicial
          img={require('../../assets/combos.jpeg')}
          texto="Combos"
          onClick={() => navigation.navigate('Combos')}
        />
      </ItemScroll>
      <ItemScroll>
        <TelaInicial
          img={require('../../assets/monte-o-seu.jpeg')}
          texto="Monte o Seu"
          onClick={() => navigation.navigate('Monte O Seu')}
        />

        <TelaInicial
          img={require('../../assets/acompanhamentos.jpeg')}
          texto="Acompanhamentos"
          onClick={() => navigation.navigate('Acompanhamentos')}
        />
      </ItemScroll>
      <ItemScroll>
        <TelaInicial
          img={require('../../assets/sobremesa.jpeg')}
          texto="Sobremesa"
          onClick={() => navigation.navigate('Sobremesa')}
        />

        <TelaInicial
          img={require('../../assets/bebidas.jpg')}
          texto="Bebidas"
          onClick={() => navigation.navigate('Bebidas')}
        />
      </ItemScroll>      
    </Container>
  );
}
