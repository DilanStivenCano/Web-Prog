import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../hooks/useAuth"
import { Button } from "../Button/Button"
import './Form.css'

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
            <form onSubmit={handleSubmit} className="login--form">
                <h1 className="login--title">Tim Burton Web</h1>
                <div className="login--content">
                    <div className="login-box">
                        <div className="login--input-box">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                onChange={handleInputChange}
                                value={formState.username}
                                placeholder="Username"
                                className="login-input"
                            />
                            {/* <label htmlFor="username" className="login--input-label">Username</label> */}
                        </div>
                    </div>
                    <div className="login-box">
                        <div className="login--input-box">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={handleInputChange}
                                value={formState.password}
                                placeholder="Password"
                                className="login-input"
                            />
                            {/* <label htmlFor="username" className="login--input-label">Username</label> */}
                        </div>
                    </div>
                </div>

                <Button
                    title='Login'
                    type='submit'
                    labelText='Login'
                />
            </form>
        </>
    )
}