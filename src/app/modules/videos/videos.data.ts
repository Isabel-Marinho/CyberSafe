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
    arquivo: 'video-1.mp4',
  },
  {
    id: 'jd-02',
    trilhaId: 'jogos-digitais',
    titulo: 'Compras dentro do jogo e golpes de itens',
    descricao: 'Como não cair em ofertas falsas de skins e moedas.',
    arquivo: 'video-2.mp4',
  },
  {
    id: 'jd-03',
    trilhaId: 'jogos-digitais',
    titulo: 'Protegendo sua conta de jogo',
    descricao: 'Senhas e cuidados para não perder sua conta.',
    arquivo: 'video-3.mp4',
  },

  // Trilha: Segurança de Dados
  {
    id: 'sd-01',
    trilhaId: 'seguranca-dados',
    titulo: 'Senhas fortes e gerenciador de senhas',
    descricao: 'Como criar e guardar senhas seguras.',
    arquivo: 'video-1.mp4',
  },
  {
    id: 'sd-02',
    trilhaId: 'seguranca-dados',
    titulo: 'Autenticação em dois fatores',
    descricao: 'Uma segunda camada de proteção para suas contas.',
    arquivo: 'video-2.mp4',
  },
  {
    id: 'sd-03',
    trilhaId: 'seguranca-dados',
    titulo: 'Phishing por e-mail e mensagem',
    descricao: 'Como reconhecer links e mensagens falsas.',
    arquivo: 'video-3.mp4',
  },

  // Trilha: Golpes Financeiros
  {
    id: 'gf-01',
    trilhaId: 'golpes-financeiros',
    titulo: 'Golpe do falso atendente de banco',
    descricao: 'Como identificar ligações e mensagens fraudulentas.',
    arquivo: 'video-1.mp4',
  },
  {
    id: 'gf-02',
    trilhaId: 'golpes-financeiros',
    titulo: 'Golpes com Pix',
    descricao: 'Cuidados antes de fazer uma transferência.',
    arquivo: 'video-2.mp4',
  },
  {
    id: 'gf-03',
    trilhaId: 'golpes-financeiros',
    titulo: 'Links e boletos falsos',
    descricao: 'Como conferir se um pagamento é legítimo.',
    arquivo: 'video-3.mp4',
  },
];
