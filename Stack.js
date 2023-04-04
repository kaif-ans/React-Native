import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App2 from './App2'
import Screen from './Screen'
import Benzema from './Benzema'
import WeatherApp from './WeatherApp';
import BookApp from './Book_List_App/BookApp';

const Stack = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Screen' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='App2' component={App2} />
                <Stack.Screen name='Screen' component={Screen} />
                <Stack.Screen name='Benzema' component={Benzema} />
                <Stack.Screen name='WeatherApp' component={WeatherApp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Stack