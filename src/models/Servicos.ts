import Cliente from "./Cliente";
import SetorAtuacao from "./SetorAtuacao";

export default interface Servicos {
    id: number;
    foto: string;
    contato: string;
    descricao: string;
    setorAtuacao: SetorAtuacao | null;
    cliente: Cliente | null;
  }