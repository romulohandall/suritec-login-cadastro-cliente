import {Endereco} from "./endereco.model";
import {Telefone} from "./telefone.model";

export class Cliente {
  id?: any;
  nome?: string;
  cpf?: string;
  endereco?: Endereco;
  telefones?: Telefone[];

}
