import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../hooks/useAuth"
import { Button } from "./Button"

export function Form () {
    const navigate = useNavigate()

    const { login, users } = useAuth()

    const [formState, setFormState] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = users.find(
            (user) =>
                user.username === formState.username &&
                user.password === formState.password
        )

        if (user) {
            login(user.username)
            navigate("/dashboard")
        }else {
            alert('No found username')
        }
    }

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleInputChange}
                    value={formState.username}
                    placeholder="username"
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleInputChange}
                    value={formState.password}
                    placeholder="Password"
                />

                <Button
                    title='Login'
                    type='submit'
                />
            </form>
        </>
    )
}