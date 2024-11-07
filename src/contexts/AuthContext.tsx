import { createContext, ReactNode, useState, useEffect } from "react";
import { login } from "../services/Service";
import ClienteLogin from "../models/ClienteLogin";
import { toastAlerta } from "../util/toastAlerta";

interface AuthContextProps {
  cliente: ClienteLogin;
  handleLogout(): void;
  handleLogin(usuario: ClienteLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [cliente, setCliente] = useState<ClienteLogin>({
    razaoSocial:"",
    id: 0,
    cpf: "",
    nomeCompleto: "",
    email: "",
    senha: "",
    foto: "",
    token: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // Carregar os dados do cliente do localStorage quando o componente for montado
  useEffect(() => {
    const storedCliente = localStorage.getItem("cliente");
    if (storedCliente) {
      setCliente(JSON.parse(storedCliente));
    }
  }, []);

  // Função para logar o usuário
  async function handleLogin(userLogin: ClienteLogin) {
    setIsLoading(true);
    try {
      // Chama o serviço de login e atualiza o cliente
      await login(`/clientes/logar`, userLogin, setCliente);
      toastAlerta("Cliente logado com sucesso", "sucesso");

      // Salva o cliente no localStorage para persistir os dados
      localStorage.setItem("cliente", JSON.stringify(userLogin));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toastAlerta("Dados do cliente inconsistentes", "erro");
      setIsLoading(false);
    }
  }

  // Função para deslogar o usuário
  function handleLogout() {
    // Limpa os dados do cliente e o token do localStorage
    setCliente({
      razaoSocial:"",
      id: 0,
      cpf: "",
      nomeCompleto: "",
      email: "",
      senha: "",
      foto: "",
      token: "",
    });

    localStorage.removeItem("cliente"); // Remove o cliente do localStorage
  }

  return (
    <AuthContext.Provider value={{ cliente, handleLogin, handleLogout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
