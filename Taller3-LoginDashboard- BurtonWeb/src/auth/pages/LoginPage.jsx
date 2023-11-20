import { Form } from "../components";
import { AuthContextProvider } from "../context/AuthContextProvider"
import FondoLogin from '../../assets/FondoLogin.jpg'
import './LoginPage.css';

export function LoginPage () {
    return (
        <AuthContextProvider>
            <div className="login">
                <img src={FondoLogin} className="login--image"/>
                <Form className="login--form" />
            </div>
        </AuthContextProvider>
    )
}