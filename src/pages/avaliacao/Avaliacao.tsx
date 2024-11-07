import React, { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaPaperPlane, FaUserCircle, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Avaliacao.css';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
}

const Avaliacao: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            const newMessage: Message = {
                id: messages.length + 1,
                text: inputValue,
                sender: 'user',
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setInputValue('');

            // Simular uma resposta do bot
            setTimeout(() => {
                const botResponse: Message = {
                    id: messages.length + 2,
                    text: `Resposta do bot para: "${inputValue}"`,
                    sender: 'bot',
                };
                setMessages((prevMessages) => [...prevMessages, botResponse]);
            }, 1000);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    // Função para verificar se o chat está no final
    const isChatAtBottom = () => {
        if (chatContainerRef.current) {
            const { scrollHeight, scrollTop, clientHeight } = chatContainerRef.current;
            return scrollHeight === scrollTop + clientHeight;
        }
        return false;
    };

    // Efeito que rola para o final se o chat estiver no fundo
    useEffect(() => {
        if (isChatAtBottom() && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div className="avaliacao-container">
            <header className="avaliacao-header">
                <Link to="/feed" className="back-button">
                    <FaArrowLeft /> Voltar
                </Link>
                <h1 className="avaliacao-title">Avaliação com Especialista</h1>
            </header>
            
            {/* Texto de orientação */}
            <div className="avaliacao-orientacao">
                <p>Aqui você pode tirar suas dúvidas referentes ao plantio de nossas plantas indicadas e descobrir muito mais. Interaja com o nosso chat e aproveite!</p>
            </div>
            
            <div className="chat-box" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <main className="chat-container">
                    <div className="messages-list" ref={chatContainerRef} style={{ overflowY: 'auto', maxHeight: '500px' }}>
                        {messages.map((message) => (
                            <div key={message.id} className={`message ${message.sender}`}>
                                {message.sender === 'user' ? (
                                    <>
                                        <FaUserCircle className="message-icon" />
                                        <span className="message-text">{message.text}</span>
                                    </>
                                ) : (
                                    <>
                                        <FaRobot className="message-icon" />
                                        <span className="message-text">{message.text}</span>
                                    </>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown} // Adiciona a função de envio com Enter
                            placeholder="Digite sua mensagem..."
                        />
                        <button onClick={handleSendMessage}>
                            <FaPaperPlane />
                        </button>
                    </div>
                </main>
            </div>
            <footer className="avaliacao-footer">
                <p>&copy; 2024 Tamagoseed</p>
            </footer>
        </div>
    );
};

export default Avaliacao;
