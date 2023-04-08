import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Offers from './Offers'
import Screen from './Screen'
import Benzema from './Benzema'
import WeatherApp from './WeatherApp';
import BookApp from './Book_List_App/BookApp';

const Stack = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Benzema' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Offers' component={Offers} />
                <Stack.Screen name='Screen' component={Screen} />
                <Stack.Screen name='Benzema' component={Benzema} />
                <Stack.Screen name='WeatherApp' component={WeatherApp} />
                <Stack.Screen name='BookApp' component={BookApp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Stack