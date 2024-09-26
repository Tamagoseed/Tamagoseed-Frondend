import React, { useContext, useEffect, useState } from 'react';
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
    buscarServico();
  }, [servicos.length]);

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
              src={logo}
              alt="logo"
              className="mb-4 h-95  mx-auto md:mx-0"
            />
            <div className='container max-w- md:mr-0'>
              <p className=" mb-2 text-5xl text-white font-bold">Impulsionando Inovação</p>
              <p className="mb-4 text-5xl text-white font-bold">Sustentável</p>
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
  {/*
  DEIXAR COMENTADO PARA RODAR SEM ERROS

  
  <div className='container flex mx-auto my-4'>
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
          <h2 className="text-neutral-950 text-[2.9rem] font-bold">Missão</h2>
        </div>
        <p className="text-neutral-950 leading-7 py-6  text-left">
          Proporcionar soluções eficientes e personalizadas para nossos
          clientes, oferecendo uma gestão de serviços de alta qualidade que
          atenda às necessidades específicas de cada setor de atuação. Nosso
          compromisso é entregar resultados que impulsionem o crescimento e
          a inovação, sempre focados na satisfação e no sucesso dos nossos
          clientes.
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
          Ser reconhecida como líder no mercado de gestão de serviços,
          destacando-se pela excelência no atendimento ao cliente e pela
          capacidade de adaptação às demandas dinâmicas do mercado.
          Aspiramos a ser a referência em inovação e qualidade, criando
          parcerias duradouras e promovendo o desenvolvimento contínuo de
          nossos serviços e tecnologias.
        </p>
      </div>
    </div>
  </div>

        <Valores handleClick={handleClick} texto={texto} />
      </section>

      <Contato/>   
      </>
    );
}

export default Home;