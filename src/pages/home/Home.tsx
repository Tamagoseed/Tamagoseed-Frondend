import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Adicionei esta linha para o FEED
import './Home.css';
import ModalServico from '../../components/servicos/modalServico/ModalServico';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import CardServicos from '../../components/servicos/cardServicos/CardServicos';
import Servicos from '../../models/Servicos';
import { AuthContext } from '../../contexts/AuthContext';
import { buscar } from '../../services/Service';
import { toastAlerta } from '../../util/toastAlerta';
import Contato from '../contato/Contato';
import { ThreeCircles } from 'react-loader-spinner';

import logo from '../../assets/logorenovatech.png';
import imagemMissao from "../../assets/missao.png";
import imagemVisao from "../../assets/visao.png";
import imagemValores from "../../assets/valores.png";

function Home() {

  const [servicos, setServicos] = useState<Servicos[]>([]);

  const { cliente, handleLogout } = useContext(AuthContext);
  const token = cliente.token;

  async function buscarServico() {
    try {
      await buscar('/servicos', setServicos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente','info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    const fetchServicos = async () => {
      await buscarServico();
  
      if (window.location.hash === '#contato') {
        const contatoSection = document.getElementById('contato');
        if (contatoSection) {
          contatoSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
  
    fetchServicos();
  }, []);
  

  function Valores({ handleClick, texto }) {
    const handleItemClick = (valor) => {
      handleClick(valor);
    };
  
    return (
      <div className="container mx-auto px-6 lg:px-20 py-3">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <div className="flex gap-x-2 items-center justify-center mb-2">
              <h2 className="text-neutral-950 text-[2.9rem] font-bold">Valores</h2>
            </div>
            <div className="grid grid-cols-4 gap-2 py-2">
              <h3
                className="font-bold cursor-pointer  hover:text-green-500 mb-4 "
                onClick={() => handleItemClick("Eficiência")}
              >Eficiência
              </h3>
              <h3
                className="font-bold cursor-pointer hover:text-green-500 mb-4 "
                onClick={() => handleItemClick("Inovação")}
              >Inovação
              </h3>
              <h3
                className="font-bold cursor-pointer  hover:text-green-500 mb-4 "
                onClick={() => handleItemClick("Transparência")}
              >Transparência 
              </h3>
              <h3
                className="font-bold cursor-pointer  hover:text-green-500 mb-4 "
                onClick={() => handleItemClick("Personalização")}
              >
                Personalização
              </h3>
            </div>
            <p className="text-neutral-950 leading-7  text-left ">
              {texto || "Otimização contínua de processos para oferecer serviços de alta qualidade com agilidade e precisão."}
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center ">
            <img
              src={imagemValores}
              alt="Valores"
              className="w-82 h-auto pl-4"
            />
          </div>
        </div>
      </div>
  
    );
  }
  const [texto, setTexto] = useState("");
  
    const handleClick = (valor) => {
      switch (valor) {
        case "Eficiência":
          setTexto(
            "Otimização contínua de processos para oferecer serviços de alta qualidade com agilidade e precisão."
          );
          break;
        case "Inovação":
          setTexto(
            "Busca incessante por novas soluções sustentáveis e tecnológicas para atender e superar as expectativas dos clientes."
          );
          break;
        case "Transparência":
          setTexto(
            "Compromisso com a clareza e honestidade nas relações com clientes, parceiros e colaboradores."
          );
          break;
        case "Personalização":
          setTexto(
            "Entendimento profundo das necessidades de cada cliente, proporcionando soluções sustentáveis pensadas de forma exclusiva e adequada para cada necessidade."
          );
          break;
        default:
          setTexto("");
      }
    };


    return (
        <>

        
        
      <div className="relative w-full">
          <img
            src="https://i.imgur.com/Nnv1wMa.jpeg"
            alt="Imagem de fundo"
            className="w-full h-full object-cover"
          />
        
       <div className=" absolute inset-0 flex justify-end items-center bg-green-400 bg-opacity-20 ">
          <div className="flex flex-col items-center text-white text-center mx-auto md:ml-auto md:mr-28  md:p-0">
            <img
              src="https://imgur.com/1jCCY5a.jpeg"
              alt="LogoTamago"
              className="mb-4 h-95  mx-auto md:mx-0"
            />
            <div className='container max-w- md:mr-0'>
              <p className=" mb-2 text-5xl text-white font-bold">Tamagoseed</p>
              <p className="mb-4 text-5xl text-white font-bold">Pensando Verde</p>
            </div>
            {/* Adicione o Link aqui */}
            <div className="flex flex-col items-center">
              <Link to="/feed" className="text-lg text-blue-500 hover:underline mb-4">
                Ir para o Feed
                </Link>
              </div>
          </div>
        </div>
        
        
        
      </div>

      {servicos.length === 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ThreeCircles
          visible={true}
          height="150"
          width="150"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />    
          </div> 
      )}
  {/* <div className='container flex mx-auto my-4'>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
        modules={[Pagination]}
        className="mySwiper p-6"

        {/* { servicos.map (servico) => (
          <SwiperSlide key=(servico.id)} >
          <CardServicos post={servico} />
          </SwiperSlide>
        ) 
        )}}
      >
        {servicos.map((servico) => (
          <SwiperSlide key={servico.id} >
            <CardServicos post={servico} />
          </SwiperSlide>
      )
      )}
      </Swiper>
  </div> */}
        
  <section className="py-32">
      <div className="container mx-auto px-10 lg:px-20 py-3">
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="lg:w-1/2">
        <div className="flex gap-x-2 items-center justify-center mb-2">
          <h2 className="text-neutral-950 text-[2.9rem] font-bold">Nossa Missão</h2>
        </div>
        <p className="text-neutral-950 leading-7 py-6  text-left">
        Com nosso aplicativo, adquira sua semente e inicie sua jornada de cultivo. 
        Aprenda a cuidar de suas plantas enquanto contribui para a biodiversidade e para a saúde 
        do nosso planeta. Juntos, podemos incentivar práticas sustentáveis e cultivar um futuro melhor para todos.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={imagemMissao}
          alt="Missão"
          className="w-82 h-auto"
        />
      </div>
    </div>
  </div>

  <div className="container mx-auto px-10 lg:px-20 mt-20 py-3">
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={imagemVisao}
          alt="Visão"
          className="w-82 h-auto"
        />
      </div>
      <div className="lg:w-1/2">
        <div className="flex gap-x-2 items-center justify-center mb-2">
          <h2 className="text-neutral-950 text-[2.9rem] font-bold">Visão</h2>
        </div>
        <p className="text-neutral-950 text-right leading-7 py-6 ">
        Nossa visão é criar um espaço onde o amor pela natureza se encontra com a tecnologia, 
        promovendo um futuro mais verde e sustentável. Queremos que cada usuário se sinta 
        capacitado a fazer a diferença, não apenas em seu lar, mas em toda a comunidade. 
        Com nosso aplicativo, todos têm a oportunidade de serem agentes de mudança na preservação ambiental.
        </p>
      </div>
    </div>
  </div>

        <Valores handleClick={handleClick} texto={texto} />
      </section>

      <Contato />   
      </>
    );
}

export default Home;