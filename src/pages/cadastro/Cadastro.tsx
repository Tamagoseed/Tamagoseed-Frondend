import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cliente from "../../models/Cliente";
import { cadastrarCliente } from "../../services/Service";
import { toastAlerta } from "../../util/toastAlerta";

function Cadastro() {
    let navigate = useNavigate();

    const [confirmaSenha, setConfirmaSenha] = useState<string>("");
    const [cliente, setCliente] = useState<Cliente>({
        id: 0,
        cpf: "",
        nomeCompleto: "",
        email: "",
        senha: "",
        foto: ""
    });

    const [clienteResposta, setClienteResposta] = useState<Cliente>({
        id: 0,
        cpf: "",
        nomeCompleto: "",
        email: "",
        senha: "",
        foto: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (clienteResposta.id !== 0) {
            back();
        }
    }, [clienteResposta]);

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
            setIsLoading(true); // Mostra o carregamento
            try {
                await cadastrarCliente(`/clientes/cadastrar`, cliente, setClienteResposta);
                toastAlerta('Cliente cadastrado com sucesso', 'sucesso');
            } catch (error) {
                toastAlerta('Erro ao cadastrar o Cliente', 'erro');
            } finally {
                setIsLoading(false); // Finaliza o carregamento
            }
        } else {
            toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro');
            setCliente({ ...cliente, senha: "" });
            setConfirmaSenha("");
        }
    }

    return (
        <div className="bg-green-200 py-8 px-6 min-h-screen">
            <div className="bg-white p-8 md:w-3/4 lg:w-1/2 mx-auto rounded-lg shadow-lg">
                <form onSubmit={cadastrarNovoCliente}>
                    <div className="mb-5">
                        <label htmlFor="nomeCompleto" className="block text-gray-600 font-semibold mb-2">Nome Completo</label>
                        <input
                            type="text"
                            id="nomeCompleto"
                            name="nomeCompleto"
                            value={cliente.nomeCompleto}
                            onChange={atualizarEstado}
                            placeholder="Nome Completo"
                            className="w-full py-2 px-4 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="cpf" className="block text-gray-600 font-semibold mb-2">CPF</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            value={cliente.cpf}
                            onChange={atualizarEstado}
                            placeholder="CPF"
                            className="w-full py-2 px-4 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                            required
                            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                            title="CPF deve estar no formato: XXX.XXX.XXX-XX"
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={cliente.email}
                            onChange={atualizarEstado}
                            placeholder="Email"
                            className="w-full py-2 px-4 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="senha" className="block text-gray-600 font-semibold mb-2">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            value={cliente.senha}
                            onChange={atualizarEstado}
                            placeholder="Senha"
                            className="w-full py-2 px-4 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                            required
                            minLength={8}
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="confirmaSenha" className="block text-gray-600 font-semibold mb-2">Confirmar Senha</label>
                        <input
                            type="password"
                            id="confirmaSenha"
                            name="confirmaSenha"
                            value={confirmaSenha}
                            onChange={handleConfirmarSenha}
                            placeholder="Confirmar Senha"
                            className="w-full py-2 px-4 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="foto" className="block text-gray-600 font-semibold mb-2">Foto</label>
                        <input
                            type="text"
                            id="foto"
                            name="foto"
                            value={cliente.foto}
                            onChange={atualizarEstado}
                            placeholder="Nome do Arquivo da Foto"
                            className="w-full py-2 px-4 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                        />
                    </div>

                    <div className="text-right">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="py-3 px-8 bg-green-400 text-white font-bold rounded-lg shadow disabled:opacity-50"
                        >
                            {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;
