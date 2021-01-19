import React from 'react';
import { Feather } from '@expo/vector-icons';
import { 
    Container, 
    Header, 
    Title, 
    Card, 
    CardHeader, 
    Avatar, 
    Description, 
    Bold, 
    CardBody, 
    UserName, 
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
} from './styles';
import avatar from '../../images/avatar.png';

export default function Activities(){
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>Camila Mascarenhas</Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <UserName>Richelle Soares</UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$ 18,50</Value>
                        <Divider />
                        <Feather name="lock" color="#fff" size={14} />
                        <Date>Há 2 dias</Date>
                    </Details>
                </CardFooter>
            </Card>
        </Container>
    );
}