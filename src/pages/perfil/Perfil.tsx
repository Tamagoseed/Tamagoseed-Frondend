import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom'; // Importe o Link para navegação
import { FaArrowLeft } from 'react-icons/fa'; // Ícone de seta para o botão de voltar
import './Perfil.css';

const Perfil: React.FC = () => {
    const { cliente } = useContext(AuthContext);

    // Data padrão para usuários não cadastrados
    const dataPadrao = '01/01/2024'; // Data padrão
    const emailPadrao = 'nao.cadastrado@example.com'; // Email padrão

    return (
        <div className="perfil-container mx-auto max-w-4xl px-4 py-6">
            {/* Botão de voltar */}
            <header className="perfil-header mb-6">
                <Link to="/feed" className="flex items-center text-green-600 hover:text-green-800">
                    <FaArrowLeft className="mr-2" /> Voltar
                </Link>
            </header>

            <h2 className="perfil-title text-3xl font-bold text-center mb-8 text-gray-800">Perfil do Usuário</h2>

            <div className="perfil-info space-y-4">
                <div className="perfil-item flex justify-between">
                    <strong className="text-lg text-gray-700">Nome Completo:</strong>
                    <span className="text-lg text-gray-600">{cliente.nomeCompleto || 'Visitante'}</span>
                </div>

                <div className="perfil-item flex justify-between">
                    <strong className="text-lg text-gray-700">Cadastrado Desde:</strong>
                    <span className="text-lg text-gray-600">{cliente.dataCadastro || dataPadrao}</span>
                </div>

                {cliente.token && (
                    <>
                        <div className="perfil-item flex justify-between">
                            <strong className="text-lg text-gray-700">CPF:</strong>
                            <span className="text-lg text-gray-600">{cliente.cpf}</span>
                        </div>

                        <div className="perfil-item flex justify-between">
                            <strong className="text-lg text-gray-700">Email:</strong>
                            <span className="text-lg text-gray-600">{cliente.email || emailPadrao}</span>
                        </div>
                    </>
                )}

                <div className="perfil-item flex justify-between">
                    <strong className="text-lg text-gray-700">Foto:</strong>
                    <div className="perfil-photo">
                        {cliente.foto ? (
                            <img src={cliente.foto} alt="Foto do usuário" className="w-24 h-24 object-cover rounded-full" />
                        ) : (
                            'Nenhuma foto disponível'
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfil;
