import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const useAuth = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw new Error('This component sould be within a AuthContextProvider Component')
    }

    const {
        isLogged,
        setIsLogged,
        users
    } = context

    const login = (username) => {
        setIsLogged(true)
    }

    return (
        {
            isLogged,
            users,
            login
        }
    )
}