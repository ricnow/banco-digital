import react from "react";
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, Label } from './styled';
import { TouchableWithoutFeedback } from 'react-native';

export default function PayButton({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <Button
            colors={['#00fc6c', '#00ac4a']}
            start={[1, 0.2]}
        >
            <MaterialIcons name='attach-money' size={30} color='#fff' />
            <Label>Pagar</Label>
        </Button>
        </TouchableWithoutFeedback>
    );
}