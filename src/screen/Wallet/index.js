import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, AntDesign,  } from '@expo/vector-icons';
import { Switch } from 'react-native';
import crediCard from '../../images/credit-card.png'

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
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    UseTicketButton,
    UseTicketLabel,
    UseTicketContainer, 
} from './styled';


export default function Wallet(){

    //Função para Setar a visibilidade do Saldo
    const [isVisable, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);
    function handleToggleVisibility(){
        setIsVisible((prevState) => !prevState);
    }
    //Função para mudar o fundo quando não usar saldo
    function handleToggleUseBallance(){
        setUseBalance((prevState) => !prevState);
    }
    
    return (
       
        
        <Wrapper>
            <Header
             colors={
                 useBalance
                 ? ['#52E78C', '#1AB563']
                 : ['#D3D3D3', '#868686']
             }>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisable ? '15.325,00' : '----'}</Bold>
                        </Value>
                        <EyeButton onPress={handleToggleVisibility}>
                            <Feather name={isVisable ? 'eye-off' : 'eye'} size={28} color='#fff' />
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
                <Switch 
                    value={useBalance}
                    onValueChange={handleToggleUseBallance}
                />
            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitle>
                    Formas de Pagamento
                </PaymentMethodsTitle>
          
                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardTitle>
                                Cadastre seu cartão 
                            </CardTitle>
                            <CardTitle>
                                de crédito
                            </CardTitle>
                            <CardInfo>
                                Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.    
                            </CardInfo>
                        </CardDetails>
                        <Img source={crediCard} resizeMode='contain' />
                    </CardBody>
                    <AddButton>
                        <AntDesign name='pluscircleo' size={30} color='#0DB060' />
                        <AddLabel>
                            Adicionar Cartão de Crédito
                        </AddLabel>
                    </AddButton>
                </Card>
                <UseTicketContainer>
                    <UseTicketButton>
                        <MaterialCommunityIcons name='ticket' size={20} color='#0DB060' />
                        <UseTicketLabel>
                            Usar Código Promocional
                        </UseTicketLabel>
                    </UseTicketButton>
                </UseTicketContainer>
            </PaymentMethods>
        </Wrapper>
        
    );
}