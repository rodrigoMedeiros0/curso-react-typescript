import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/pagina-inicial");
    }

    return (
        <div>
            <p>Login</p>

            <button onClick={handleClick}>
                Botão para Dasboard
            </button>
        </div>
    )
}