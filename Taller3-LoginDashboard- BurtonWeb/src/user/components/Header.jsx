import Logo from '../../assets/logo.png'

export function Header () {
    return(
        <div class="flex justify-around">
        <img src={Logo} alt="Logo" class='w-20' />

        <button>Login</button>
        </div>
    )
}