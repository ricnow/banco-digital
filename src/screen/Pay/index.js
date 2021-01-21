import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Payment from '../../components/Payment';

import { 
    Container, 
    Header, 
    Input, 
    ServicesContainer, 
    ServicesHeader, 
    Title
} from './styles.js';



export default function Pay() {
  return (

        <Container>
        <Header>
            <MaterialCommunityIcons name="qrcode-scan" size={20} color="#10c86e"/>
            <Input placeholder="Quem você quer pagar?" />
        </Header>
        <ServicesContainer>
            <ServicesHeader>
            <Title>Transações</Title>
            </ServicesHeader>            
        </ServicesContainer>
        <Payment></Payment>
        </Container>
  );
}

