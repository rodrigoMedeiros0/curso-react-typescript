import { useCallback, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
// import { useNavigate } from "react-router-dom";

export const Login = () => {
  //   const navigate = useNavigate();

  //   const handleClick = () => {
  //     navigate("/pagina-inicial");
  //   };

  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const emailLenght = useMemo(() => {
    return email.length;
  }, [email.length]);

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(senha);

  }, [email, senha]);

  return (
    <div>
      <p>Login</p>
      <form action="">
        <p>Quantidade de caracteres no email: {emailLenght}</p>
        
        <InputLogin 
          label="Email"
          value={email}
          onChange={newValue => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />
        
        <InputLogin 
           label="Senha"
           type="password"
           value={senha}
           ref={inputPasswordRef}
           onChange={newValue => setSenha(newValue)}
           
        />

        {/* <label htmlFor="">
          <span>Senha</span>
          <input
            type="password"
            value={senha}
            ref={inputPasswordRef}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label> */}

        {/* <button type="button" onClick={handleEntrar}>
          Entrar
        </button> */}

        <ButtonLogin type="button" onClick={handleEntrar}>
          Entrar
        </ButtonLogin>

      </form>
    </div>
  );
};
