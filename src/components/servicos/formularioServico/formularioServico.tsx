import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Servicos from '../../../models/Servicos';
import SetorAtuacao from '../../../models/SetorAtuacao';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';

function FormularioServico() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { cliente, handleLogout } = useContext(AuthContext);
  const token = cliente.token;

  const [setorAtuacoes, setSetorAtuacoes] = useState<SetorAtuacao[]>([]);

  const [setorAtuacao, setSetorAtuacao] = useState<SetorAtuacao>({
    id: 0,
    nome: '',
    descricao: '',
    servicos: null,
  });

  const [servico, setServico] = useState<Servicos>({
    id: 0,
    foto: '',
    contato: '',
    descricao: '',
    setorAtuacao: null,
    cliente: null,
  });

  async function buscarServicosPorId(id: string) {
    await buscar(`/servicos/${id}`, setServico, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarSetorAtuacaoPorId(id: string) {
    await buscar(`/setoratuacao/${id}`, setSetorAtuacao, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarSetorAtuacao() {
    await buscar('/setoratuacao', setSetorAtuacoes, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado','info');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarSetorAtuacao();
    if (id !== undefined) {
      buscarServicosPorId(id);
      console.log(setorAtuacao);
    }
  }, [id]);

  useEffect(() => {
    setServico({
      ...servico,
      setorAtuacao: setorAtuacao,
    });
  }, [setorAtuacao]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setServico({
      ...servico,
      [e.target.name]: e.target.value,
      setorAtuacao: setorAtuacao,
      cliente: cliente,
    });
  }

  function retornar() {
    navigate('/servicos');
  }

  async function gerarNovaServico(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ servico });

    if (id !== undefined) {
      try {
        await atualizar(`/servicos`, servico, setServico, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta('Serviço atualizado com sucesso','sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente','info');
          handleLogout();
        } else {
          toastAlerta('Erro ao atualizar o Serviço','erro');
        }
      }
    } else {
      try {
        await cadastrar(`/servicos`, servico, setServico, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta('Serviço cadastrado com sucesso','sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente','info');
          handleLogout();
        } else {
          toastAlerta('Erro ao cadastrar o Serviço','erro');
        }
      }
    }
  }

  const carregandoSetorAtuacao = servico.descricao === '';
    
  
  return (
      <div className="container flex flex-col mx-auto items-center px-4 py-6 bg-white rounded-lg ">
        <h1 className="text-2xl font-semibold text-center mb-6 text-green-700">{id !== undefined ? 'Editar Serviço' : 'Cadastrar Serviço'}</h1>

        <form onSubmit={gerarNovaServico} className="container flex flex-col gap-4 w-96">
          
          <div className="flex flex-col gap-2">
            <label htmlFor="foto" className="text-sm font-medium">Imagem do serviço</label>
            <input
              value={servico.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Adicione uma imagem que defina seu serviço"
              name="foto"
              required
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contato" className="text-sm font-medium">Contato do serviço</label>
            <input
              value={servico.contato}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Contato"
              name="contato"
              required
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="descricao" className="text-sm font-medium">Texto do Serviço</label>
            <input
              value={servico.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Descrição"
              name="descricao"
              required
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="setorAtuacao" className="text-sm font-medium">Setor de Atuação do Serviço</label>
            <select 
              name="setorAtuacao" 
              id="setorAtuacao" 
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500" 
              onChange={(e) => buscarSetorAtuacaoPorId(e.currentTarget.value)}
            >
              <option value="" disabled selected>Selecione um Setor de Atuação</option>
              {setorAtuacoes.map((setorAtuacao) => (
                <option key={setorAtuacao.id} value={setorAtuacao.id}>{setorAtuacao.nome}</option>
              ))}
            </select>
          </div>

          <button 
            disabled={carregandoSetorAtuacao} 
            type='submit' 
            className={`rounded py-2 px-4 font-bold text-white w-full mt-4 ${carregandoSetorAtuacao ? 'bg-gray-400' : 'bg-green-700 hover:bg-green-900'}`}
          >
            {carregandoSetorAtuacao ? 'Carregando...' : id !== undefined ? 'Editar' : 'Cadastrar'}
          </button>
        </form>
      </div>
  );
}

export default FormularioServico;
