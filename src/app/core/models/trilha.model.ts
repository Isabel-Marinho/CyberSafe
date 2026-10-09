export type TrilhaId = 'jogos-digitais' | 'seguranca-dados' | 'golpes-financeiros';

export interface Trilha {
  id: TrilhaId;
  nome: string;
  faixa: string;
  descricao: string;
}
