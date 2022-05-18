import React from 'react';

import {
  Container,
  ImageLogo
} from './styles';

export default function Preload(){
  return(
    <Container>
      <ImageLogo source={require('../../assets/burguer-mania-logo.png')}/>
    </Container>
  );
}