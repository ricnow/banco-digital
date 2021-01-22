import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';
import Payment from '../../components/Payment';


import { 
    Wrapper,
    Container, 
    Header, 
    Input, 
    TransationContainer,
    TransationHeader,
    TransationTitle,
     
} from './styles.js';



export default function Pay() {
  return (
    <Wrapper>
        <Container>
        <Header>
            <MaterialCommunityIcons name="qrcode-scan" size={20} color="#10c86e"/>
            <Input placeholder="Quem você quer pagar?" />
        </Header>
        <TransationContainer>
            <TransationHeader>
            <TransationTitle>Transações</TransationTitle>
            </TransationHeader>            
        </TransationContainer>
        <Payment />
        
        <Banner />
        
        </Container>
    </Wrapper>
  );
}

