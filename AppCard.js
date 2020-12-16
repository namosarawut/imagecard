import React from 'react'
import { View,Button } from 'react-native'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import AppCard1 from './AppCard1'
import AppCard4 from './AppCard4';
import AppCard2 from './AppCard2';
import AppCard3 from './AppCard3';
import AppCard5 from './AppCard5';




export default function AppStack2() {
    return (
        <NavigationContainer>{ 
            <Stack.Navigator>
            <Stack.Screen name="card1" component={AppCard1} />
            <Stack.Screen name="card2" component={AppCard2} />
            <Stack.Screen name="card3" component={AppCard3} />
            <Stack.Screen name="card4" component={AppCard4} />
            <Stack.Screen name="card5" component={AppCard5} />

          </Stack.Navigator>
        }</NavigationContainer>
        
    )
    
}const Stack = createStackNavigator();
