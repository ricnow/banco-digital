import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import img1 from '../../images/avatar.png'
import img2 from '../../images/.01png'
import img3 from '../../images/06.png'
import img4 from '../../images/07.png'

import { 
    Container, 
    Header, 
    Input, 
    ServicesContainer, 
    ServicesHeader, 
    Title,
    ServiceContainer, 
    Img, 
    ServiceTextContainer, 
    ServiceTitle, 
    ServiceDescription, 
} from './styles.js'

const services = [
    {
      img: img1,
      title: 'Pagar pessoas',
      description: 'Pague todos os seus amigos que também estão no PicPay',
    },
    {
      img: img2,
      title: 'Recarga de Celular',
      description: 'Vivo, Claro, Tim, Oi, Nextel, Algar, Sercomtel, Correios',
    },
    {
      img: img3,
      title: 'Pagar Conta',
      description: 'Pague sua conta de luz, água boletos bancários etc.',
    },
    {
      img: img4,
      title: 'Cobrar',
      description: 'Cobre um amigo',
    },
  ]

export default function Pay(){
  return (
    <Container>
      <Header>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e"/>
        <Input placeholder="Quem você quer pagar?"/>
      </Header>
      <ServicesContainer>
        <ServicesHeader>
          <Title>Serviços</Title>
        </ServicesHeader>
        <ServiceComponent/>
      </ServicesContainer>
    </Container>
  );
}

