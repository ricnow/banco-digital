import React from 'react';
import { Feather, MaterialCommunityIcons,  } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { 
    Wrapper, 
    Header, 
    HeaderContainer, 
    Title, 
    BalanceContainer, 
    Value, 
    Bold, 
    EyeButton,
    Info,
    Action,
    Actions,
    ActionLabel,
    UseBalance,
    UseBalanceTitle, 
} from './styled';


export default function Wallet(){
    return (
        <>
        
        <Wrapper>
            <Header colors={['#52E78C', '#1AB563']}>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                    <BalanceContainer>
                        <Value>
                            R$ <Bold>15.325,00</Bold>
                        </Value>
                        <EyeButton>
                            <Feather name='eye' size={28} color='#fff' />
                        </EyeButton>
                    </BalanceContainer>
                    <Info>
                        Seu saldo está rendendo 100% do CDI
                    </Info>
                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name='bank-plus' size={28} color='#fff' />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>
                        <Action>
                            <MaterialCommunityIcons name='bank' size={28} color='#fff' />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>
            
            <UseBalance>
                <UseBalanceTitle>
                    Use o saldo ao pagar
                </UseBalanceTitle>
                <Switch />
            </UseBalance>
        </Wrapper>
        </>
    );
}