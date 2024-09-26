import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClienteLogin from "../../models/ClienteLogin";
import { AuthContext } from "../../contexts/AuthContext";
import { RotatingLines } from 'react-loader-spinner';
import './Login.css'
function Login() {
    let navigate = useNavigate();
  
    const [clienteLogin, setClienteLogin] = useState<ClienteLogin>(
      {} as ClienteLogin
    );
  
    const { cliente, handleLogin } = useContext(AuthContext);
  
    const {isLoading} = useContext(AuthContext) 
  
    useEffect(() => {
      if (cliente.token !== "") {
          navigate('/')
      }
  }, [cliente])
  
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setClienteLogin({
        ...clienteLogin,
        [e.target.name]: e.target.value
    })
  }
  
  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(clienteLogin)
  }
  
    return (
      <>

        <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
          <div className="container mx-auto w-full max-w-sm p-4 bg-gray-50 rounded-lg sm:p-6 md:p-8 shadow-xl">
            <form className="space-y-6" onSubmit={login}>
              <h5 className="text-center text-2xl font-bold text-gray-900">Login</h5>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="email"
                  value={clienteLogin.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  required
                />
              </div>
              <div>
                <label htmlFor="senha" className="block mb-2 text-sm font-medium text-gray-900">Senha</label>
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={clienteLogin.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center text-center"
              >
                {isLoading ? (
                  <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                  />
                ) : (
                  <span>Entrar</span>
                )}
              </button>
              <div className="text-sm text-center font-medium text-gray-900">
                Ainda não tem uma conta?{' '}
                <Link to="/cadastro" className="text-green-700 hover:underline">Cadastre-se</Link>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  
  export default Login;