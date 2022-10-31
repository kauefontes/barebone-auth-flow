import { createContext, useState } from "react";
import { authService } from "../services/authService";

export interface AuthData {
    token: string
    email: string
    name: string
}
interface AuthContextData {
    authData?: AuthData   
    signIn: (email: string, password: string) => Promise<AuthData>
    signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
)

export const AuthProvider: React.FC  = ({children}) => {
    const [authData, setAuthData] = useState<AuthData>()
    
    async function signIn(email: string, password: string): Promise<AuthData>{
        setAuthData(authData)
        return await authService.signIn(email, password)
    }
    async function signOut(): Promise<void> {
        setAuthData(undefined)
        return
    }

    return (
        <AuthContext.Provider value={{authData, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}