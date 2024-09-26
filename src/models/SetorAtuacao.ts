import Servicos from "./Servicos";

export default interface SetorAtuacao {
    id: number;
    nome: string;
    descricao: string;
    servicos?: Servicos[]| null;
  }