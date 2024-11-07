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

  // Respostas pré-definidas para as perguntas relacionadas às plantas/frutas
  const respostasPreDefinidas: Record<string, string> = {
    "pitanga": `A pitanga é uma fruta tropical rica em vitamina C. Ela precisa de solo bem drenado e exposição ao sol direto. Ideal para climas quentes, a pitanga pode ser cultivada em pequenos espaços ou até mesmo em vasos. Requer regas moderadas, sem encharcar o solo. Sua colheita ocorre geralmente entre 6 a 8 meses após o plantio.`,
    "morango": `Os morangos preferem solos ricos em matéria orgânica, bem drenados e ligeiramente ácidos. Eles precisam de bastante luz solar, mas devem ser protegidos do calor intenso. É importante regá-los frequentemente, mas sem deixar o solo encharcado. A colheita acontece entre 3 a 4 meses após o plantio, dependendo da variedade.`,
    "espinafre": `O espinafre é uma planta de clima ameno, que se adapta bem a solos ricos em nutrientes e bem drenados. Ele necessita de regas frequentes para manter o solo úmido. Pode ser plantado em qualquer época do ano, mas é mais produtivo em temperaturas mais frescas (15-20°C). O espinafre cresce rápido e pode ser colhido em cerca de 30 dias.`,
    "tomate cereja": `O tomate cereja é uma planta que necessita de solo bem drenado e rico em matéria orgânica. Ele adora sol direto e necessita de regas constantes. O tomate cereja cresce melhor em temperaturas de 20-25°C. A colheita pode começar de 60 a 90 dias após o plantio, quando os frutos estiverem maduros e vermelhos.`,
    "suculenta rosas-de-pedra": `As rosas-de-pedra são suculentas que preferem solo bem drenado e não precisam de muita água. Elas gostam de bastante luz solar direta, mas podem ser cultivadas em ambientes internos com luz indireta. As regas devem ser feitas com cuidado, evitando o acúmulo de água. É uma planta que se adapta bem a climas secos e quentes.`,
    "espada de são jorge": `A espada de São Jorge é uma planta resistente, ideal para quem busca uma planta de fácil cuidado. Ela tolera ambientes com pouca luz e requer pouca água. É importante deixar o solo secar entre as regas. Ela pode ser cultivada em diversos tipos de solo e cresce bem tanto em ambientes internos quanto externos.`,
    "cacto": `Cactos são plantas adaptadas a climas áridos e exigem pouca água. Eles preferem solo seco e bem drenado. Devem ser cultivados em locais com boa luz solar direta. A rega deve ser feita apenas quando o solo estiver completamente seco. Cactos podem viver por muitos anos e se reproduzem facilmente por sementes ou estacas.`,
    "jiboia": `A jiboia (ou pothos) é uma planta muito resistente que pode prosperar em ambientes com pouca luz. Ela não é exigente quanto ao tipo de solo e gosta de regas moderadas. É uma planta ótima para pendurar em vasos ou deixar crescer ao longo de suportes. A jiboia também é uma excelente opção para purificação do ar.`,
    "lavanda": `A lavanda é uma planta que adora sol e prefere solos bem drenados e ligeiramente alcalinos. Ela é resistente à seca, mas necessita de regas esporádicas. Suas flores aromáticas podem ser usadas em cosméticos, chás e decoração. A lavanda é uma excelente planta para atrair polinizadores como abelhas e borboletas.`,
    "bromélia": `As bromélias são plantas tropicais que se adaptam bem a ambientes úmidos e quentes. Elas precisam de luz indireta, não suportando exposição direta ao sol por longos períodos. A rega deve ser feita nas rosetas, evitando o encharcamento do solo. As bromélias florescem em diversas cores e suas flores podem durar até vários meses.`,
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue('');

      // Verifica se a mensagem do usuário corresponde a alguma resposta pré-definida
      const botResponseText = respostasPreDefinidas[inputValue.toLowerCase()] || "Desculpe, não entendi sua pergunta. Pode reformular?";
      
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: botResponseText,
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

  // Função para abrir o ChatGPT em uma nova guia
  const abrirNovaGuiaChatGPT = () => {
    const url = 'https://chat.openai.com'; // URL do ChatGPT
    window.open(url, '_blank'); // Abre o ChatGPT em uma nova guia
  };

  return (
    <div className="avaliacao-container bg-gray-100 min-h-screen flex flex-col">
      <header className="avaliacao-header p-4 bg-green-700 text-white flex items-center justify-between">
        <Link to="/" className="back-button text-lg flex items-center">
          <FaArrowLeft className="mr-2" /> Voltar
        </Link>
        <h1 className="avaliacao-title text-xl sm:text-2xl font-bold">Avaliação com Especialista</h1>
      </header>

      <div className="avaliacao-orientacao px-4 py-6 text-sm text-center text-gray-700">
        <p>Aqui você pode tirar suas dúvidas referentes ao plantio de nossas plantas indicadas e descobrir muito mais. Interaja com o nosso chat e aproveite!</p>
      </div>

      <div className="chat-box flex-1 p-4">
        <main className="chat-container bg-white shadow-lg rounded-lg max-w-xl mx-auto">
          <div
            className="messages-list p-4 overflow-y-auto max-h-96"
            ref={chatContainerRef}
            style={{ maxHeight: 'calc(100vh - 200px)' }}
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

          {/* Botão para abrir o ChatGPT em uma nova guia */}
          <div className="text-center mt-4">
            <button
              onClick={abrirNovaGuiaChatGPT}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Abrir Chat com Especialista
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
