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
        <div className="perfil-container">
            {/* Botão de voltar */}
            <header className="perfil-header">
                <Link to="/feed" className="back-button">
                    <FaArrowLeft /> Voltar
                </Link>
            </header>

            <h2 className="perfil-title">Perfil do Usuário</h2>
            <div className="perfil-info">
                <div className="perfil-item">
                    <strong>Nome Completo:</strong> {cliente.nomeCompleto || 'Visitante'}
                </div>
                <div className="perfil-item">
                    <strong>Cadastrado Desde:</strong> {cliente.dataCadastro || dataPadrao}
                </div>
                {cliente.token && (
                    <>
                        <div className="perfil-item">
                            <strong>CPF:</strong> {cliente.cpf}
                        </div>
                        <div className="perfil-item">
                            <strong>Email:</strong> {cliente.email || emailPadrao}
                        </div>
                    </>
                )}
                <div className="perfil-item">
                    <strong>Foto:</strong> {cliente.foto ? <img src={cliente.foto} alt="Foto do usuário" className="perfil-photo" /> : 'Nenhuma foto disponível'}
                </div>
            </div>
        </div>
    );
};

export default Perfil;
