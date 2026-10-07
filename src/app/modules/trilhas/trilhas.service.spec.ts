import { TestBed } from '@angular/core/testing';
import { TrilhasService } from './trilhas.service';

describe('TrilhasService', () => {
  let service: TrilhasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrilhasService);
  });

  it('criança recebe a trilha de jogos digitais', () => {
    expect(service.trilhaPorIdade(12).nome).toBe('Segurança em Jogos Digitais');
  });

  it('adulto recebe a trilha de segurança de dados', () => {
    expect(service.trilhaPorIdade(30).nome).toBe('Segurança de Dados');
  });

  it('pessoa 50+ recebe a trilha de golpes financeiros', () => {
    expect(service.trilhaPorIdade(65).nome).toBe('Golpes Financeiros');
  });

  it('idade negativa gera erro', () => {
    expect(() => service.trilhaPorIdade(-1)).toThrow('Idade inválida');
  });
});
