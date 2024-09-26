import React, { useContext, useEffect, useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Servicos from '../../../models/Servicos';
import { buscar } from '../../../services/Service';
import CardServicos from '../cardServicos/CardServicos';
import { toastAlerta } from '../../../util/toastAlerta';
import ModalServico from '../modalServico/ModalServico';

function ListaServicos() {
  const [servicos, setServicos] = useState<Servicos[]>([]);
  const [buscarTermo, setBuscarTermo] = useState<string>('');

  let navigate = useNavigate();

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

  const filtroServicos = servicos.filter((servico) =>
    servico.cliente?.razaoSocial.toLowerCase().includes(buscarTermo.toLowerCase())
);

  return (
    <>

      <div className=" py-4 max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-xl text-green-800 font-bold leading-tight sm:text-4xl xl:text-5xl mb-6 mt-6 ">Transforme Seus Desafios em Oportunidades com Serviços Especializados!</h2>
            <p className="mb-4">Conheça os serviços disponíveis e veja como podemos ajudar você a transformar desafios em oportunidades de sucesso, 
              e também encontre a oportunidade de se posicionar no mercado da inovação sustentável oferecendo seu próprio serviço!
            </p>
            <div>
              <ModalServico />
            </div>
      </div>
        
        <div className="container flex flex-col my-10 mx-auto w-1/2">
            <input
                type="text" placeholder="Buscar por Serviço" value={buscarTermo}
                onChange={(e) => setBuscarTermo(e.target.value)}
                className="p-4 border-2 pl-10  mb-4 bg-[#ddffdd] placeholder-gray-500"/>
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
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filtroServicos.map((servico) => (
          <CardServicos key={servico.id} post={servico} />
        ))}
      </div>
    </>
  );
}

export default ListaServicos;