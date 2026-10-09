import { TestBed } from '@angular/core/testing';
import { TrilhasService } from './trilhas.service';

describe('TrilhasService', () => {
  let service: TrilhasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrilhasService);
  });

  it('lista as 3 trilhas do CyberSafe', () => {
    expect(service.listar().length).toBe(3);
  });

  it('busca uma trilha pelo id', () => {
    expect(service.buscarPorId('golpes-financeiros')?.nome).toBe('Golpes Financeiros');
  });

  it('retorna undefined para uma trilha que não existe', () => {
    expect(service.buscarPorId('inexistente')).toBeUndefined();
  });

  it('criança recebe a trilha de jogos digitais', () => {
    expect(service.trilhaPorIdade(12).id).toBe('jogos-digitais');
  });

  it('17 anos ainda recebe a trilha de jogos digitais', () => {
    expect(service.trilhaPorIdade(17).id).toBe('jogos-digitais');
  });

  it('18 anos recebe a trilha de segurança de dados', () => {
    expect(service.trilhaPorIdade(18).id).toBe('seguranca-dados');
  });

  it('50 anos ainda recebe a trilha de segurança de dados', () => {
    expect(service.trilhaPorIdade(50).id).toBe('seguranca-dados');
  });

  it('51 anos recebe a trilha de golpes financeiros', () => {
    expect(service.trilhaPorIdade(51).id).toBe('golpes-financeiros');
  });

  it('idade negativa gera erro', () => {
    expect(() => service.trilhaPorIdade(-1)).toThrow('Idade inválida');
  });

  it('idade que não é número gera erro', () => {
    expect(() => service.trilhaPorIdade(Number.NaN)).toThrow('Idade inválida');
  });
});
