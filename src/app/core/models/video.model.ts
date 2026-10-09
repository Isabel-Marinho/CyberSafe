import { TrilhaId } from './trilha.model';

export interface Video {
  id: string;
  trilhaId: TrilhaId;
  titulo: string;
  descricao: string;
  /** Nome do arquivo .mp4 dentro da pasta da trilha */
  arquivo: string;
}
