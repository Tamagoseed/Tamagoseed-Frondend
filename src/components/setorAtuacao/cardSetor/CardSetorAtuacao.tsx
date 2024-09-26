import SetorAtuacao from "../../../models/SetorAtuacao";
import { Link } from "react-router-dom";
import { Trash, Pencil } from "@phosphor-icons/react";


interface CardSetorAtuacaoProps {
  setorAtuacao: SetorAtuacao;
}

function CardSetorAtuacao({ setorAtuacao }: CardSetorAtuacaoProps) {

  return (
    <div className="border flex flex-col rounded-[8px] overflow-hidden relative shadow-lg">
      <header className="pt-12 py-8 px-6 bg-green-700 text-white font-bold text-2xl">
        {setorAtuacao.nome}
      </header>
      <div className="p-4">
        <p>{setorAtuacao.descricao}</p>
      
       
        <button
          className="mt-4 p-2 bg-green-600 text-white rounded hover:bg-green-800"
        >
          <Link to={`/servicosSetor/${setorAtuacao.id}`}>
            Ver Serviços
          </Link>
        </button>
  
      </div>
      
      <div className="absolute top-2 right-2 flex space-x-2">
        <Link
          to={`/editarSetorAtuacao/${setorAtuacao.id}`}
          className="text-black bg-green-300 hover:bg-green-600 rounded-full flex items-center justify-center w-8 h-8"
        >
          <span className="sr-only">Editar</span>
          <Pencil size={18} weight="fill" />
        </Link>

        <Link
          to={`/deletarSetorAtuacao/${setorAtuacao.id}`}
          className="text-slate-100 bg-red-400 hover:bg-red-700 rounded-full flex items-center justify-center w-8 h-8"
        >
          <span className="sr-only">Deletar</span>
          <Trash size={18} weight="fill" />
        </Link>
      </div>
    </div>
  );
}

export default CardSetorAtuacao;

