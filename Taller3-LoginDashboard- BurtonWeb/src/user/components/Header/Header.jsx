import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'
import Burton from '../../../assets/burton.jpg'

export function Header () {
    const [showDropdown, setShowDropdown] = useState(false)
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate("/");
    }

    return(
        <div className="menu--nav">
            <h1>Tim Burton Web</h1>
            <div
                className="user--nav"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
            >
                <img class="rounded-full h-12" src={Burton} width="50px"/>
                {showDropdown && (
                <div className="dropdown-menu">
                    <button className="dropdown-btn" onClick={handleLogout}>
                    Log out
                    </button>
                </div>
                )}
            </div>
        </div>
    )
}