import { TestBed } from '@angular/core/testing';
import { TRILHAS } from '../trilhas/trilhas.data';
import { VIDEOS } from './videos.data';
import { VideosService } from './videos.service';

describe('VideosService', () => {
  let service: VideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideosService);
  });

  it('cada trilha tem exatamente 3 vídeos na versão beta', () => {
    for (const trilha of TRILHAS) {
      expect(service.listarPorTrilha(trilha.id).length).toBe(3);
    }
  });

  it('listarPorTrilha devolve só vídeos da trilha pedida', () => {
    const videos = service.listarPorTrilha('seguranca-dados');
    expect(videos.every((video) => video.trilhaId === 'seguranca-dados')).toBe(true);
  });

  it('os ids dos vídeos são únicos', () => {
    const ids = VIDEOS.map((video) => video.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('todo vídeo pertence a uma trilha que existe', () => {
    const idsDasTrilhas: string[] = TRILHAS.map((trilha) => trilha.id);
    expect(VIDEOS.every((video) => idsDasTrilhas.includes(video.trilhaId))).toBe(true);
  });

  it('todo vídeo aponta para um arquivo .mp4', () => {
    expect(VIDEOS.every((video) => video.arquivo.endsWith('.mp4'))).toBe(true);
  });

  it('busca um vídeo pelo id', () => {
    expect(service.buscarPorId('gf-02')?.titulo).toBe('Golpes com Pix');
  });

  it('monta a URL do vídeo com a pasta da trilha', () => {
    const video = service.buscarPorId('jd-01');
    expect(video).toBeDefined();
    if (video) {
      expect(service.urlDoVideo(video)).toBe('assets/videos/jogos-digitais/video-1.mp4');
    }
  });
});
