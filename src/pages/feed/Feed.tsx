import React, { useState } from 'react';
import { FaUser, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Feed.css';
import pitanga from '../../assets/pitanga.png';
import morango from '../../assets/morango.png';
import espinafre from '../../assets/espinafre.png';
import tomatecereja from '../../assets/tomatecereja.png';
import suculenta from '../../assets/suculenta.png';
import espadasaojorge from '../../assets/espadasaojorge.png';
import cacto from '../../assets/cacto.png';
import jiboia from '../../assets/jiboia.png';
import lavanda from '../../assets/lavanda.png';
import bromelia from '../../assets/bromelia.png';

const posts = [
    {
        id: 1,
        title: "Pitanga",
        description: (
            <>
                <strong>Descrição:</strong> A pitanga é uma fruta tropical de sabor agridoce, polpa aquosa e perfumada.<br />
                <strong>Nome Científico:</strong> Eugenia uniflora.<br />
                <strong>Manutenção:</strong> Preferencialmente cultivada em solo bem drenado e fértil. Resistente a pragas, mas pode exigir regas regulares, especialmente em períodos secos.<br />
                <strong>Origem:</strong> Brasil.<br />
                <strong>Vantagens:</strong> Fácil adaptação às mais diferentes condições de clima e solo, fonte de vitaminas A, B e C.<br />
                <strong>Meio de Cultivo:</strong> Sementes ou por mudas.
            </>
        ),
        image: pitanga,
    },
    {
        id: 2,
        title: "Morango",
        description: (
            <>
                <strong>Descrição:</strong> O morango é um fruto pequeno, geralmente vermelho, suculento e adocicado, com sementes visíveis na superfície. Sua polpa é macia e aromática.<br />
                <strong>Nome Científico:</strong> Fragaria × ananassa.<br />
                <strong>Manutenção:</strong> Requer solo bem drenado, rico em matéria orgânica e um pH levemente ácido. Necessita de rega regular, principalmente em períodos secos, e deve ser protegido de pragas e doenças.<br />
                <strong>Origem:</strong> Europa e Américas.<br />
                <strong>Vantagens:</strong> Rico em vitaminas C, antioxidantes e fibras, o morango é um alimento saudável e versátil, ótimo para consumo fresco, em sobremesas, sucos e geleias. Além disso, é uma planta de crescimento relativamente rápido.<br />
                <strong>Meio de Cultivo:</strong> Sementes ou mudas.
            </>
        ),
        image: morango,
    },
    {
        id: 3,
        title: "Espinafre",
        description: (
            <>
                <strong>Descrição:</strong> Folhas verdes escuras e suculentas, com um sabor levemente adocicado e terroso. É uma planta herbácea.<br />
                <strong>Nome Científico:</strong> Spinacia oleracea.<br />
                <strong>Manutenção:</strong> Necessita de solo bem drenado e rico em matéria orgânica. O espinafre prefere clima fresco, requer rega regular e pode ser colhido em 4 a 6 semanas após o plantio.<br />
                <strong>Origem:</strong> Pérsia (atual Irã).<br />
                <strong>Vantagens:</strong> Rico em vitaminas A, C, K e ferro, é um alimento muito nutritivo. Além disso, é de crescimento rápido e pode ser cultivado em pequenos espaços.<br />
                <strong>Meio de Cultivo:</strong> Sementes ou mudas.
            </>
        ),
        image: espinafre,
    },
    {
        id: 4,
        title: "Tomate Cereja",
        description: (
            <>
                <strong>Descrição:</strong> Pequenos tomates, geralmente redondos ou ovais, com um sabor adocicado. Eles podem variar em cor, incluindo vermelho, amarelo e laranja.<br />
                <strong>Nome Científico:</strong> Solanum lycopersicum var. cerasiforme.<br />
                <strong>Manutenção:</strong> Requer solo fértil, bem drenado e bastante sol (pelo menos 6 horas por dia). A rega deve ser regular, evitando encharcamento. É importante realizar a poda e apoiar as plantas, se necessário.<br />
                <strong>Origem:</strong> América do Sul.<br />
                <strong>Vantagens:</strong> Além de serem saborosos, são ricos em licopeno, antioxidantes e vitaminas. São ótimos para consumo fresco, em saladas ou como aperitivos.<br />
                <strong>Meio de Cultivo:</strong> Sementes ou mudas.
            </>
        ),
        image: tomatecereja,
    },
    {
        id: 5,
        title: "Suculenta Rosas-de-Pedra",
        description: (
            <>
                <strong>Descrição:</strong> Outras variedades como Echeveria e Aloe Vera, com folhas carnudas.<br />
                <strong>Nome Científico:</strong> Echeveria Elegans.<br />
                <strong>Manutenção:</strong> Água esporádica e luz direta.<br />
                <strong>Origem:</strong> Diversas regiões do mundo, como África, Madagascar, América do Sul, Ásia e Austrália.<br />
                <strong>Vantagens:</strong> Perfeitas para quem quer um toque de verde em pequenos espaços.<br />
                <strong>Meio de Cultivo:</strong> Sementes, Folhas e Rosetas.
            </>
        ),
        image: suculenta,
    },
    {
        id: 6,
        title: "Espada de São Jorge",
        description: (
            <>
                <strong>Descrição:</strong> Folhas longas e pontiagudas, em verde ou variegado.<br />
                <strong>Nome Científico:</strong> Dracaena Trifasciata.<br />
                <strong>Manutenção:</strong> Muito resistente, requer água mínima.<br />
                <strong>Origem:</strong> África tropical ocidental.<br />
                <strong>Vantagens:</strong> Ajuda a purificar o ar e é quase indestrutível.<br />
                <strong>Meio de Cultivo:</strong> Semente e Propagação Vegetativa.
            </>
        ),
        image: espadasaojorge,
    },
    {
        id: 7,
        title: "Cactos",
        description: (
            <>
                <strong>Descrição:</strong> Diversas formas e tamanhos, com espinhos característicos.<br />
                <strong>Nome Científico:</strong> Cactaceae.<br />
                <strong>Manutenção:</strong> Água rara, precisa de luz direta.<br />
                <strong>Origem:</strong> Américas.<br />
                <strong>Vantagens:</strong> Existem muitas variedades, cada uma com suas peculiaridades.<br />
                <strong>Meio de Cultivo:</strong> Sementes e mudas.
            </>
        ),
        image: cacto,
    },
    {
        id: 8,
        title: "Jiboia / Pothos",
        description: (
            <>
                <strong>Descrição:</strong> Folhas em forma de coração, verdes ou variegadas.<br />
                <strong>Nome Científico:</strong> Epipremnum Aureum.<br />
                <strong>Manutenção:</strong> Rega moderada, cresce bem em ambientes internos.<br />
                <strong>Origem:</strong> Ilhas Salomão.<br />
                <strong>Vantagens:</strong> Excelente para pendurar e purifica o ar.<br />
                <strong>Meio de Cultivo:</strong> Caule e por divisão de touceira.
            </>
        ),
        image: jiboia,
    },
    {
        id: 9,
        title: "Lavanda",
        description: (
            <>
                <strong>Descrição:</strong> Flores roxas e aroma agradável, folhas prateadas.<br />
                <strong>Nome Científico:</strong> Lavandula.<br />
                <strong>Manutenção:</strong> Precisa de luz e solo bem drenado.<br />
                <strong>Origem:</strong> Mediterrâneo, nordeste da África e sudeste da Ásia.<br />
                <strong>Vantagens:</strong> Além da beleza, suas flores podem ser usadas para chás e aromatizantes.<br />
                <strong>Meio de Cultivo:</strong> Sementes e por divisão de touceira.
            </>
        ),
        image: lavanda,
    },
    {
        id: 10,
        title: "Bromélia",
        description: (
            <>
                <strong>Descrição:</strong> Folhas em roseta com flores vibrantes.<br />
                <strong>Nome Científico:</strong> Bromelia antiacantha Bertol.<br />
                <strong>Manutenção:</strong> Água na "copa", luz indireta.<br />
                <strong>Origem:</strong> América do Sul-Brasil.<br />
                <strong>Vantagens:</strong> Adaptável e resistente, traz um toque tropical à decoração.<br />
                <strong>Meio de Cultivo:</strong> Sementes e por mudas.
            </>
        ),
        image: bromelia,
    },
];

const PostCard: React.FC<{ post: typeof posts[0] }> = ({ post }) => {
    return (
        <div key={post.id} className="post-card">
            <h3 className="post-title">{post.title}</h3>
            <img src={post.image} alt={post.title} className="post-image" />
            <p className="post-description">{post.description}</p>
        </div>
    );
};

const Feed: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState(false); // Para controlar visibilidade do menu lateral

    // Função para alternar a visibilidade do menu
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="feed-container">
            <header className="feed-header">
                <div
                    className="menu-icon"
                    onClick={toggleMenu}
                    aria-label="Abrir menu lateral"
                >
                    &#9776; {/* Ícone de menu */}
                </div>
                <nav className="feed-nav">
                    {/* Links adicionais podem ser colocados aqui */}
                </nav>
            </header>

            {/* Menu lateral */}
            {menuVisible && (
                <nav className="sidebar">
                    <Link to="/perfil" className="nav-button">
                        <FaUser /> Acessar Perfil
                    </Link>
                    <Link to="/avaliacao" className="nav-button">
                        <FaStar /> Avaliação com Especialista
                    </Link>
                </nav>
            )}

            <div className="feed-welcome">Bem-vindo(a) ao Feed</div>
            <main>
                <section className="feed-content">
                    <div className="post-list">
                        {posts.map(post => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                </section>
            </main>

            <footer className="feed-footer">
                <p>&copy; 2024 Tamagoseed</p>
            </footer>
        </div>
    );
};

export default Feed;