import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'
import { useAuth } from '../contexts/Auth'
import { Text, View } from 'react-native'

export function Router() {
    const { authData, loading } = useAuth() 

    if(loading) {
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Loading data...</Text>
        </View>
    }
    return (    
        <NavigationContainer>
            { authData ? <AppStack /> : <AuthStack /> }
        </NavigationContainer>    
    )
}