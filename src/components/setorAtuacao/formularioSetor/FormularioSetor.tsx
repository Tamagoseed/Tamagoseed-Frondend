import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import SetorAtuacao from '../../../models/SetorAtuacao';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';

function FormularioSetor() {

    const [setorAtuacao, setSetorAtuacao] = useState<SetorAtuacao>({} as SetorAtuacao);

    let navigate = useNavigate();
  
    const { id } = useParams<{ id: string }>();
  
    const { cliente, handleLogout } = useContext(AuthContext);
    const token = cliente.token;
  
    async function buscarPorId(id: string) {
      await buscar(`/setoratuacao/${id}`, setSetorAtuacao, {
        headers: {
          Authorization: token,
        },
      });
    }
  
    useEffect(() => {
      if (id !== undefined) {
        buscarPorId(id)
      }
    }, [id])
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setSetorAtuacao({
        ...setorAtuacao,
        [e.target.name]: e.target.value
      })
  
      console.log(JSON.stringify(setorAtuacao))
    }
  
    async function gerarNovoSetor(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
  
      if (id !== undefined) {
        try {
          await atualizar(`/setoratuacao`, setorAtuacao, setSetorAtuacao, {
            headers: {
              'Authorization': token
            }
          })
  
          toastAlerta('Setor Atualizado com sucesso','sucesso')
          retornar()
  
        } catch (error: any) {
          if (error.toString().includes('403')) {
            toastAlerta('O token expirou, favor logar novamente','info')
            handleLogout()
          } else {
            toastAlerta('Erro ao atualizar o Setor de Atuação','erro')
          }
  
        }
  
      } else {
        try {
          await cadastrar(`/setoratuacao`, setorAtuacao, setSetorAtuacao, {
            headers: {
              'Authorization': token
            }
          })
  
          toastAlerta('Setor de Atuação cadastrado com sucesso','sucesso')
  
        } catch (error: any) {
          if (error.toString().includes('403')) {
            toastAlerta('O token expirou, favor logar novamente','info')
            handleLogout()
          } else {
            toastAlerta('Erro ao cadastrar o Setor de Atuação','erro')
          }
        }
      }
  
      retornar()
    }
  
    function retornar() {
      navigate("/setoratuacao")
    }
  
    useEffect(() => {
      if (token === '') {
        toastAlerta('Você precisa estar logado','info');
        navigate('/login');
      }
    }, [token]);
   

  return (
    <>
    <div className="container mx-auto p-4 md:p-8 flex flex-col items-center justify-center max-w-lg">
        <h1 className="text-3xl text-green-700 md:text-4xl font-bold text-center mb-6">
          {id === undefined ? 'Cadastre um novo Setor' : 'Editar Setor'}
        </h1>

    <form className="w-full flex flex-col gap-6 bg-white shadow-md rounded-lg p-6" onSubmit={gerarNovoSetor}>
    
      <div className="flex flex-col gap-2">
        <label htmlFor="nome" className="text-sm font-medium text-gray-700">Nome do Setor de Atuação</label>
      <input
        value={setorAtuacao.nome}
        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
        type="text"
        placeholder="Nome"
        name="nome"
        required
        className="border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-green-500 focus:border-green-500"
      />
    </div>
    
    <div className="flex flex-col gap-2">
      <label htmlFor="descricao" className="text-sm font-medium text-gray-700">Descrição</label>
      <input
        type="text"
        placeholder="Descrição"
        name="descricao"
        className="border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-green-500 focus:border-green-500"
        value={setorAtuacao.descricao}
        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
      />
    </div>

    <button
      className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-auto block w-full md:w-1/2"
      type="submit"
    >
      {id === undefined ? 'Cadastrar' : 'Editar'}
    </button>
  </form>
</div>
    </>
  )
}

export default FormularioSetor