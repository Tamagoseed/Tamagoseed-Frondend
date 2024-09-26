import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Servicos from '../../../models/Servicos';
import { Pencil, Trash } from '@phosphor-icons/react';
import { AuthContext } from '../../../contexts/AuthContext';
import SetorAtuacao from '../../../models/SetorAtuacao';

interface CardServicoProps {
  post: Servicos;
  setor?: SetorAtuacao
}

function CardServicos({ post, setor }: CardServicoProps) {
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);
  const { cliente, handleLogout } = useContext(AuthContext);

  const toggleReadMore = (postId: number) => {
	setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  const isExpanded = expandedPostId === post.id;

  return (
	<div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between transition-transform transform hover:scale-105">
  		<div>
    	<img src={post.foto} className='w-full h-72 object-cover' alt="Imagem ilustrativa do serviço fornecido" />
    	<div className="flex items-center bg-green-600 p-4">
      	<img
        	src={post.cliente?.foto || 'https://i.imgur.com/cLoiHis.png'}
        	alt={post.cliente?.razaoSocial}
        	className="h-16 w-16 rounded-full object-cover  shadow-2xl"
      	/>
      	<h3 className="ml-4 text-xl font-bold text-white">{post.cliente?.razaoSocial}</h3>
    	</div>
    	<div className="p-6">
      	<h4 className="text-lg font-semibold text-gray-700">{post.contato}</h4>
      	<p className={`mt-2 text-gray-600 ${isExpanded ? '' : 'line-clamp-3'}`}>{post.descricao}</p>
      	<p className="mt-2 text-gray-600"><span className='font-bold text-green-700'>Setor de Atuação:</span> {setor !== undefined ? setor.nome : post.setorAtuacao?.nome}</p>
      	<button onClick={() => toggleReadMore(post.id)} className="mt-2 text-green-700 font-semibold hover:underline">
        	{isExpanded ? 'Ver menos' : 'Ver mais...'}
      	</button>
    	</div>
  	</div>

	{post.cliente.id === cliente.id && (

		<div className="absolute top-2 right-2 flex space-x-2">
        <Link
          to={`/editarServico/${post.id}`}
          className="text-slate-100 bg-green-600 hover:bg-green-900 rounded-full flex items-center justify-center w-8 h-8"
        >
          <span className="sr-only">Editar</span>
          <Pencil size={18} weight="fill" />
        </Link>

        <Link
          to={`/deletarServico/${post.id}`}
          className="text-slate-100 bg-red-400 hover:bg-red-700 rounded-full flex items-center justify-center w-8 h-8"
        >
          <span className="sr-only">Deletar</span>
          <Trash size={18} weight="fill" />
        </Link>
      </div>
	  )}
	  
	  
	</div>
  );
}

export default CardServicos;
