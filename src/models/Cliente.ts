import Servicos from "./Servicos";

export default interface Cliente {
    razaoSocial:"",
    id: number;
    cpf: string;
    nomeCompleto: string;
    email: string;
    senha: string;
    foto: string;
    servicos?: Servicos | null;
  }