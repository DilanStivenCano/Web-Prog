import { Form } from "../components"
import { AuthContextProvider } from "../context/AuthContextProvider"
import Logo from '../../assets/logo.png'
import './LoginPage.css';

export function LoginPage () {
    return (
        <AuthContextProvider>
            <div className="container-g">
    <div className="form-container">
         <img src={Logo} className="imgg"/>     
        <div className="form-header">
            <h1 className="h1-form">Log in</h1>
            <p className="p-form">Welcome to Tim Burton Productions</p>
        </div>
        <div className="form-style">
        <Form />
        </div>
        
    </div>
</div>

        </AuthContextProvider>
    )
}