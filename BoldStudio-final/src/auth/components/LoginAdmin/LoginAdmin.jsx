//https://vitejs.dev/guide/assets.html
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import './LoginAdmin.css'
import imgLogin from '../../../assets/imgLogin.jpg'
import LogoBold from '../../../assets/LogoBold.png'

export function LoginAdmin() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.login(email, password);
      navigate("/controllerAdmin");
    } catch (e) {
      alert("a");
    }
  };

  return (
    <div className="loginBody">
      <div className="imgLogin">
        <img src={imgLogin} />
      </div>
      <div className="formContainer">
        <form>
          <div className="logo">
            <img src={LogoBold} />
          </div>
          <div className="buttonsSocial">
            <button className="buttonA">
              <ion-icon name="logo-apple"></ion-icon>
              <a href="#">Sign  in with Apple</a>
            </button>
            <button className="buttonG">
              <ion-icon name="logo-google"></ion-icon>
              <a href="#">Sign  in with Google</a>
            </button>
          </div>
          <h3>Or</h3>
          <div className="formLogin">
            <div>
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="Signin">
            <div className="check">
              <input type="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <button onClick={(e) => handleLogin(e)}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
