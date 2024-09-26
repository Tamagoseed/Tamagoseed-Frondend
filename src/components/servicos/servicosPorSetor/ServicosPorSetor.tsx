import React, { useContext, useEffect, useState } from 'react'
import CardServicos from '../cardServicos/CardServicos';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';
import SetorAtuacao from '../../../models/SetorAtuacao';
import Servicos from '../../../models/Servicos';
import ModalServico from '../modalServico/ModalServico';

function ServicosPorSetor() {
  const navigate = useNavigate()
  const [setor, setSetor] = useState<SetorAtuacao>({} as SetorAtuacao);
  const { id } = useParams<{ id: string }>();
  const { cliente } = useContext(AuthContext);
  const token = cliente.token;


  const [servicos, setServicos] = useState<Servicos[]>([]);
  const [buscarTermo, setBuscarTermo] = useState<string>('');

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado','info')
      navigate('/login')
    }
  }, [token])

  async function buscarSetorPorId() {
    await buscar(`/setoratuacao/${id}`, setSetor ,{
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() => {
    buscarSetorPorId()
  }, [id])

  const filtroServicos = servicos.filter((servico) =>
    servico.cliente?.razaoSocial.toLowerCase().includes(buscarTermo.toLowerCase())
);



  return (
    <>

        
          
            
          {setor.servicos?.length === 0 ? 
          
          <>
            
              
                <div className="flex items-center justify-center min-h-screen">
                  <div className="w-full max-w-md mx-4 md:mx-0">
                    <div className="max-w-md mx-auto text-center bg-white bg-opacity-90">
                      <h1 className="text-4xl font-bold text-gray-800 mb-6">Ainda não há serviços neste setor!</h1>
                      <p className="text-2xl text-gray-600 mb-8">Seja o primeiro em impulsionar e liderar em <span className='text-2xl font-bold text-green-700'>{setor.nome}</span>.</p>
                    
                    {/* <div>
                      <ModalServico />
                    </div> */}
                    
                  </div>
                </div>
              </div>
  
          </>
          
            
        
           : <>
              <div className="container flex flex-col my-10 mx-auto w-1/2">
                      <input
                            type="text" placeholder="Buscar por Serviço" value={buscarTermo}
                            onChange={(e) => setBuscarTermo(e.target.value)}
                            className="p-4 border-2 pl-10  mb-4 bg-[#ddffdd] placeholder-gray-500"/>
                </div>


                <div className="container flex flex-col items-center justify-center min-h-screen w-full mx-auto p-4">
                      <h2 className="text-3xl font-bold text-green-700 mb-10">Serviços do Setor <span>{setor.nome}</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {setor.servicos?.map((servico) => (
                    <CardServicos key={servico.id} post={servico} setor={setor} />
                  ))}
                </div>
              </div>
           </> 
          }
    </>
  )
}

export default ServicosPorSetor