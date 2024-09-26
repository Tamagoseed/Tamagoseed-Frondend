import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Servicos from '../../../models/Servicos'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../util/toastAlerta'

function DeletarServico() {
  const [servico, setServico] = useState<Servicos>({} as Servicos)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { cliente, handleLogout } = useContext(AuthContext)
  const token = cliente.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/servicos/${id}`, setServico, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente','info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado','info')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/servicos")
  }

  async function deletarServico() {
    try {
      await deletar(`/servicos/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      toastAlerta('Serviço apagado com sucesso', 'sucesso')

    } catch (error) {
      toastAlerta('Erro ao apagar Serviço', 'erro')
    }

    retornar()
  }
  return (
    
    
    <div className='flex items-center justify-center min-h-screen bg-gray-200 p-6'>
      <div className='bg-white border border-gray-300 shadow-md rounded-lg w-full max-w-xl mx-4 md:mx-0'>
        <header className='bg-gradient-to-r from-green-400 to-teal-500 text-white p-6 rounded-t-lg'>
          <h1 className='text-2xl font-semibold'>Deletar Serviço</h1>
        </header>
        <div className='p-6'>
          <p className='text-center text-lg font-medium mb-6 text-gray-700'>Você tem certeza de que deseja apagar o Serviço a seguir?</p>
          <div className='bg-red-50 p-6 rounded-lg border border-red-500'>
            <header className='text-2xl font-semibold text-red-600'>{cliente.razaoSocial}</header>
            <p className='mt-2 font-bold text-red-600'>{servico.contato}</p>
            <p className='mt-2 text-gray-600'>{servico.descricao}</p>
          </div>
          <div className='mt-8 flex gap-4'>
                        <button 
                            className='flex-1 bg-green-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 transform transition-transform'
                            onClick={retornar}
                        >
                            Não
                        </button>
                        <button 
                            className='flex-1 bg-red-400 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:bg-red-700 hover:scale-105 transform transition-transform'
                            onClick={deletarServico}
                        >
                            Sim
                        </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeletarServico