import { AuthData } from "../contexts/Auth";

function signIn(email: string, password: string): Promise<AuthData>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(password === '123456') {
                resolve({
                        token: 'fake-token',
                        email,
                        name: 'Kaue Pereira'
                    })
            } else {
                reject(new Error('Invalid credentials'))
            }
        }, 500)
    })
}

export const authService = {signIn}