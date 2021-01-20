import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons'

import PayButton from './components/PayButton';
import HomeScreen from './screen/Home';
import WalletScreen from './screen/Wallet';
import PayScreen from './screen/Pay';


//Contruindo as tabs embaixo
const Tab = createBottomTabNavigator();
//Construindo os icones 
const icons = {
    Home: {
        lib: AntDesign,
        name: 'home',
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard',
    },
    Notification: {
        lib: Ionicons,
        name: 'ios-notifications-outline',
    },
    Settings: {
        lib: AntDesign,
        name: 'setting',
    },
}
export default function Navigation(){
    return (
        //Dentro da Tab.Navigator vai todas as configurações para todas as tabs
        // Como se fosse em html aplicando estilo em css
        <Tab.Navigator
            initialRouteName="Pay"
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    if (route.name == 'Pay') {
                        return (
                          <PayButton
                            onPress={() => navigation.navigate('Pay') }
                            focused={focused}
                          />
                        );
                    }
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color} />;    
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255, 255, 255, 0.2)',
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#92929c',
                
            }}
        >
            <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                title: 'Início'
            }}
            />
            <Tab.Screen 
            name="Wallet" 
            component={WalletScreen} 
            options={{
                title: 'Carteira'
            }}
            />
            
            <Tab.Screen 
            name="Pay" 
            component={PayScreen} 
            options={{
                title: ''
            }}
            />
            <Tab.Screen 
            name="Notification" 
            component={PayScreen} 
            options={{
                title: 'Notificações'
            }}
            />
            <Tab.Screen 
            name="Settings" 
            component={PayScreen} 
            options={{
                title: 'Ajustes'
            }}
            />
        </Tab.Navigator>

    );
}