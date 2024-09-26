import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Cliente from "../../models/Cliente"
import { cadastrarCliente } from "../../services/Service"
import { toastAlerta } from "../../util/toastAlerta"
import { Buildings } from "@phosphor-icons/react"
import fotopadrao from '../../assets/buildings-light.svg'
function Cadastro() {
    let navigate = useNavigate();

    const [confirmaSenha, setConfirmaSenha] = useState<string>("");

    const [cliente, setCliente] = useState<Cliente>({
        id: 0,
        cnpj: "",
        razaoSocial: "",
        email: "",
        senha: "",
        foto: ""
    })
  
    const [clienteResposta, setClienteResposta] = useState<Cliente>({
        id: 0,
        cnpj: "",
        razaoSocial: "",
        email: "",
        senha: "",
        foto: ""
    })
  
    useEffect(() => {
      if (clienteResposta.id !== 0) {
        back()
      }
    }, [clienteResposta])
  
    function back() {
      navigate('/login')
    }
  
    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
      setConfirmaSenha(e.target.value)
    }
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setCliente({
        ...cliente,
        [e.target.name]: e.target.value
      })
    }
  
    async function cadastrarNovoCliente(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
  
      if (confirmaSenha === cliente.senha && cliente.senha.length >= 8) {
               
            

        try {
          await cadastrarCliente(`/clientes/cadastrar`, cliente, setClienteResposta)
          toastAlerta('Cliente cadastrado com sucesso','sucesso')
  
        } catch (error) {
          toastAlerta('Erro ao cadastrar o Cliente','erro')
        }
    } [clienteResposta];

    function back() {
        navigate('/login');
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value);
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        });
    }

    async function cadastrarNovoCliente(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (confirmaSenha === cliente.senha && cliente.senha.length >= 8) {
            try {
                
                await cadastrarCliente(`/clientes/cadastrar`, cliente, setClienteResposta);
                toastAlerta('Cliente cadastrado com sucesso', 'sucesso');
            } catch (error) {
                toastAlerta('Erro ao cadastrar o Cliente', 'erro');
            }
        } else {
            toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro');
            setCliente({ ...cliente, senha: "" });
            setConfirmaSenha("");
        }
    }}

    return (
        <div className="bg-green-200 py-32 px-10 min-h-screen">
            <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto rounded-lg shadow-lg">
                <form onSubmit={cadastrarNovoCliente}>
                    <div className="flex items-center mb-5">
                        <label htmlFor="razaoSocial" className="inline-block w-32 mr-6 text-right font-bold text-gray-600 whitespace-nowrap">Razão Social</label>
                        <input type="text" id="razaoSocial" name="razaoSocial" value={cliente.razaoSocial} onChange={atualizarEstado} placeholder="Razão Social"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none" />
                    </div>

                    <div className="flex items-center mb-5">
                        <label htmlFor="cnpj" className="inline-block w-32 mr-6 text-right font-bold text-gray-600 whitespace-nowrap">CNPJ</label>
                        <input type="text" id="cnpj" name="cnpj" value={cliente.cnpj} onChange={atualizarEstado} placeholder="CNPJ"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none" />
                    </div>

                    <div className="flex items-center mb-5">
                        <label htmlFor="email" className="inline-block w-32 mr-6 text-right font-bold text-gray-600 whitespace-nowrap">Email</label>
                        <input type="email" id="email" name="email" value={cliente.email} onChange={atualizarEstado} placeholder="Email"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none" />
                    </div>

                    <div className="flex items-center mb-5">
                        <label htmlFor="senha" className="inline-block w-32 mr-6 text-right font-bold text-gray-600 whitespace-nowrap">Senha</label>
                        <input type="password" id="senha" name="senha" value={cliente.senha} onChange={atualizarEstado} placeholder="Senha"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none" />
                    </div>

                    <div className="flex items-center mb-5">
                        <label htmlFor="confirmaSenha" className="inline-block w-32 mr-6 text-right font-bold text-gray-600 whitespace-nowrap">Confirmar Senha</label>
                        <input type="password" id="confirmaSenha" name="confirmaSenha" value={confirmaSenha} onChange={handleConfirmarSenha} placeholder="Confirmar Senha"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none" />
                    </div>

                    <div className="flex items-center mb-5">
                    <label htmlFor="foto" className="inline-block w-32 mr-6 text-right font-bold text-gray-600 whitespace-nowrap">Foto</label>
                        <input type="text" id="foto" name="foto" value={cliente.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} placeholder="Nome do Arquivo da Foto"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none" />
                    </div>

                    <div className="text-right">
                        <button className="py-3 px-8 bg-green-400 text-white font-bold rounded-lg shadow">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;
