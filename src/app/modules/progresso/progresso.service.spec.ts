import { TestBed } from '@angular/core/testing';
import { VideosService } from '../videos/videos.service';
import { ProgressoService } from './progresso.service';

describe('ProgressoService', () => {
  let progresso: ProgressoService;
  let videos: VideosService;

  const idsDaTrilha = (trilhaId: string): string[] =>
    videos.listarPorTrilha(trilhaId).map((video) => video.id);

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    progresso = TestBed.inject(ProgressoService);
    videos = TestBed.inject(VideosService);
  });

  it('começa com 0% em todas as trilhas', () => {
    expect(progresso.percentualDaTrilha('golpes-financeiros')).toBe(0);
  });

  it('marca um vídeo como assistido', () => {
    const id = idsDaTrilha('golpes-financeiros').at(0) ?? '';
    progresso.marcarComoAssistido(id);
    expect(progresso.foiAssistido(id)).toBe(true);
  });

  it('1 de 3 vídeos assistidos dá 33%', () => {
    const id = idsDaTrilha('golpes-financeiros').at(0) ?? '';
    progresso.marcarComoAssistido(id);
    expect(progresso.percentualDaTrilha('golpes-financeiros')).toBe(33);
  });

  it('todos os vídeos assistidos dá 100%', () => {
    for (const id of idsDaTrilha('seguranca-dados')) {
      progresso.marcarComoAssistido(id);
    }
    expect(progresso.percentualDaTrilha('seguranca-dados')).toBe(100);
  });

  it('marcar o mesmo vídeo duas vezes não conta em dobro', () => {
    const id = idsDaTrilha('jogos-digitais').at(0) ?? '';
    progresso.marcarComoAssistido(id);
    progresso.marcarComoAssistido(id);
    expect(progresso.percentualDaTrilha('jogos-digitais')).toBe(33);
  });

  it('o progresso de uma trilha não afeta as outras', () => {
    const id = idsDaTrilha('jogos-digitais').at(0) ?? '';
    progresso.marcarComoAssistido(id);
    expect(progresso.percentualDaTrilha('seguranca-dados')).toBe(0);
  });

  it('trilha inexistente tem 0%', () => {
    expect(progresso.percentualDaTrilha('inexistente')).toBe(0);
  });

  it('limpar zera o progresso', () => {
    const id = idsDaTrilha('golpes-financeiros').at(0) ?? '';
    progresso.marcarComoAssistido(id);
    progresso.limpar();
    expect(progresso.foiAssistido(id)).toBe(false);
  });
});
