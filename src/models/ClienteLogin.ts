export default interface ClienteLogin {
    id: number;
    cpf: string;
    nomeCompleto: string;
    email: string;
    senha: string;
    foto: string;
    token: string;
    dataCadastro?: string;
  }