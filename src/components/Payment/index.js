import React from 'react';
import { 
    Container,
    Option,
    Title, 
    Img,
} from './styles';


import { Label } from '../Suggestions/styles';
import { Ionicons, Fontisto } from '@expo/vector-icons';



export default function Payment(){
    return (
        <Container>
            <Option>
                <Ionicons name='person-circle-outline' size={15} color='#10c86e' />
                <Title>Pagar Pessoas</Title>
            </Option>
            <Option>
                <Ionicons name='ios-barcode-outline' size={15} color='#10c86e' />
                <Title>Pagar Pessoas</Title>
            </Option>
            <Option>
                <Fontisto name='shopping-pos-machine' size={15} color='#10c86e' />
                <Title>Pagar Pessoas</Title>
            </Option>
            <Option>
                <Ionicons name='person-circle-outline' size={15} color='#10c86e' />
                <Title>Pagar Pessoas</Title>
            </Option>
        </Container>
    );
}