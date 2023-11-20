import { AuthContext } from "./AuthContext"
import { useState } from "react"

export function AuthContextProvider ({ children }) {
    const [isLogged, setIsLogged] = useState(false)

    const users = [
        {
            username: 'AgudeloAna',
            password: '123'
        },

        {
            username: 'CanoDilan',
            password: '456'
        },

        {
            username: 'EjemploUsuario',
            password: 'contraseña123'
        }
    ]

    const contextValue = {
        isLogged,
        setIsLogged,
        users
    }

    return (
        <AuthContext.Provider
            value={contextValue}
        >
            {children}
        </AuthContext.Provider>
    )
}