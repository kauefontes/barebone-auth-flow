import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { SignIn } from '../screens/SignIn'

export function AuthStack() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn}/>
        </Stack.Navigator>
    )
}