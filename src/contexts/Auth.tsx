import { createContext, useContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { authService } from '../services/authService'

export interface AuthData {
    token: string
    email: string
    name: string
}
interface AuthContextData {
    authData?: AuthData   
    signIn: (email: string, password: string) => Promise<AuthData>
    signOut: () => Promise<void>
    loading: boolean
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
)

export const AuthProvider: React.FC  = ({children}) => {
    const [authData, setAuthData] = useState<AuthData>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadFromStorage()
    }, [])

    async function loadFromStorage() {
        const auth = await AsyncStorage.getItem('@AuthData')
        if(auth) {
            setAuthData(JSON.parse(auth))
        }
        setLoading(false)
    }
    
    async function signIn(email: string, password: string): Promise<AuthData> {
        try {
            const auth = await authService.signIn(email, password)
            setAuthData(auth)
            AsyncStorage.setItem('@AuthData', JSON.stringify(auth))
            return auth
        } catch (error) {
            Alert.alert(error.message, 'Try again')
        }
    }
    
    async function signOut(): Promise<void> {
        setAuthData(undefined)
        AsyncStorage.removeItem('@AuthData')
        return
    }

    return (
        <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}