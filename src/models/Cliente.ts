import Servicos from "./Servicos";

export default interface Cliente {
    id: number;
    cpf: string;
    nomeCompleto: string;
    email: string;
    senha: string;
    foto: string;
    servicos?: Servicos | null;
  }