import React from 'react';
import { 
    Container,
    Option,
    Label,
    
} from './styles';

import { Ionicons, Fontisto } from '@expo/vector-icons';



export default function Payment(){
    return (
        <Container>
            <Option>
                <Ionicons name='person-circle-outline' size={15} color='#10c86e' />
                <Label>Pagar Pessoas</Label>
            </Option>
            <Option>
                <Ionicons name='ios-barcode-outline' size={15} color='#10c86e' />
                <Label>Pagar boleto</Label>
            </Option>
            <Option>
                <Fontisto name='shopping-pos-machine' size={15} color='#10c86e' />
                <Label>Pagar nas</Label>
                <Label>Maquininhas</Label>
            </Option>
            <Option>
                <Ionicons name='person-circle-outline' size={15} color='#10c86e' />
                <Label>Fazer cobrança</Label>
            </Option>
            
        </Container>
    );
}