import React from 'react';

import { ScrollView } from 'react-native';

import TelaInicial from '../../component/TelaInicial';
import { Container, ItemScroll } from './styles';

export default function Home({ navigation }) {
  return (
    <Container>
      <ScrollView>        
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
      </ScrollView>
    </Container>
  );
}
