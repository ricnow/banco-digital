import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { 
    Container, 
    Header, 
    Input, 
    ServicesContainer, 
    ServicesHeader, 
    Title
} from './styles.js';

import ServiceComponent from '../../components/ServiceComponent';

export default function Pay() {
  return (
    <Container>
      <Header>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e"/>
        <Input placeholder="Quem você quer pagar?" />
      </Header>
      <ServicesContainer>
        <ServicesHeader>
          <Title>Serviços</Title>
        </ServicesHeader>
        <ServiceComponent />
      </ServicesContainer>
    </Container>
  );
}

