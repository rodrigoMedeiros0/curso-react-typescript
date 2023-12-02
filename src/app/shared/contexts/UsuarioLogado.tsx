import { createContext, ReactNode, useCallback, useState } from "react";

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
}

interface UsuarioLogadoProviderProps {
  children: ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>(
  {} as IUsuarioLogadoContextData
);

export const UsuarioLogadoProvider: React.FC<UsuarioLogadoProviderProps> = ({
  children,
}) => {

  const [name, setNome] = useState('');

  setTimeout(() => {
    setNome('Rodrigo');
  }, 1000)

  const handleLogout = useCallback(() => {
    console.log("Logout executou")
  }, []);
  return (
    <UsuarioLogadoContext.Provider
      value={{ nomeDoUsuario: name, logout: handleLogout }}
    >
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
