import Servicos from "./Servicos";

export default interface Cliente {
    id: number;
    cnpj: string;
    razaoSocial: string;
    email: string;
    senha: string;
    foto: string;
    servicos?: Servicos | null;
  }