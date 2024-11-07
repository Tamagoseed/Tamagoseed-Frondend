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
        <div className="avaliacao-container bg-gray-100 min-h-screen flex flex-col">
            <header className="avaliacao-header p-4 bg-green-700 text-white flex items-center justify-between">
                <Link to="/feed" className="back-button text-lg flex items-center">
                    <FaArrowLeft className="mr-2" /> Voltar
                </Link>
                <h1 className="avaliacao-title text-xl sm:text-2xl font-bold">Avaliação com Especialista</h1>
            </header>
            
            {/* Texto de orientação */}
            <div className="avaliacao-orientacao px-4 py-6 text-sm text-center text-gray-700">
                <p>Aqui você pode tirar suas dúvidas referentes ao plantio de nossas plantas indicadas e descobrir muito mais. Interaja com o nosso chat e aproveite!</p>
            </div>
            
            <div className="chat-box flex-1 p-4">
                <main className="chat-container bg-white shadow-lg rounded-lg max-w-xl mx-auto">
                    <div
                        className="messages-list p-4 overflow-y-auto max-h-96"
                        ref={chatContainerRef}
                        style={{ maxHeight: 'calc(100vh - 200px)' }} // Ajusta a altura do chat
                    >
                        {messages.map((message) => (
                            <div key={message.id} className={`message mb-3 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                {message.sender === 'user' ? (
                                    <>
                                        <FaUserCircle className="message-icon text-xl inline-block" />
                                        <span className="message-text inline-block max-w-xs bg-blue-500 text-white p-2 rounded-lg mt-1">{message.text}</span>
                                    </>
                                ) : (
                                    <>
                                        <FaRobot className="message-icon text-xl inline-block" />
                                        <span className="message-text inline-block max-w-xs bg-gray-300 p-2 rounded-lg mt-1">{message.text}</span>
                                    </>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="input-container p-4 bg-gray-100 flex items-center space-x-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Digite sua mensagem..."
                            className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none"
                        >
                            <FaPaperPlane />
                        </button>
                    </div>
                </main>
            </div>

            <footer className="avaliacao-footer p-4 text-center text-sm text-gray-600">
                <p>&copy; 2024 Tamagoseed</p>
            </footer>
        </div>
    );
};

export default Avaliacao;
