import { Video } from '../../core/models/video.model';

/**
 * CATÁLOGO DE VÍDEOS (versão beta, 3 vídeos por trilha).
 *
 * Para "postar" um vídeo novo:
 *  1. Coloque o arquivo .mp4 na pasta assets/videos/<id-da-trilha>/
 *  2. Adicione uma linha neste catálogo com o mesmo nome de arquivo
 *  3. Faça commit e push: o pipeline testa, gera o build e publica sozinho
 */
export const VIDEOS: Video[] = [
  // Trilha: Segurança em Jogos Digitais
  {
    id: 'jd-01',
    trilhaId: 'jogos-digitais',
    titulo: 'Quem está do outro lado do chat?',
    descricao: 'Como lidar com desconhecidos em jogos online.',
    arquivo: 'desconhecidos.mp4',
  },
  {
    id: 'jd-02',
    trilhaId: 'jogos-digitais',
    titulo: 'Uso ético do chat',
    descricao: 'Evitando promover discursos de ódio em conversas.',
    arquivo: 'bullying.mp4',
  },
  {
    id: 'jd-03',
    trilhaId: 'jogos-digitais',
    titulo: 'Protegendo seu dispositivo',
    descricao: 'Cuidados para ao baixar jogos.',
    arquivo: 'app.mp4',
  },

  // Trilha: Segurança de Dados
  {
    id: 'sd-01',
    trilhaId: 'seguranca-dados',
    titulo: 'Senhas seguras',
    descricao: 'Qual o modelo de senha segura.',
    arquivo: 'senhas.mp4',
  },
  {
    id: 'sd-02',
    trilhaId: 'seguranca-dados',
    titulo: 'Autenticação em dois fatores',
    descricao: 'Uma segunda camada de proteção para suas contas.',
    arquivo: 'dois-fatores.mp4',
  },
  {
    id: 'sd-03',
    trilhaId: 'seguranca-dados',
    titulo: 'Mantenha os programas atualizados',
    descricao: 'A importância de atualizar aplicativos.',
    arquivo: 'atualizacao.mp4',
  },

  // Trilha: Golpes Financeiros
  {
    id: 'gf-01',
    trilhaId: 'golpes-financeiros',
    titulo: 'Cuidado com compras online',
    descricao: 'Como identificar sites e aplicativos de compra legítimos.',
    arquivo: 'compras.mp4',
  },
  {
    id: 'gf-02',
    trilhaId: 'golpes-financeiros',
    titulo: 'Golpes com Pix',
    descricao: 'Cuidados antes de fazer uma transferência.',
    arquivo: 'pix.mp4',
  },
  {
    id: 'gf-03',
    trilhaId: 'golpes-financeiros',
    titulo: 'Não acredite em tudo',
    descricao: 'Evitando golpes por clicar em links suspeitos.',
    arquivo: 'premios.mp4',
  },
];
