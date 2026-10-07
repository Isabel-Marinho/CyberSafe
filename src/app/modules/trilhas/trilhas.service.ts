import { Injectable } from '@angular/core';

export interface Trilha {
  nome: string;
  faixa: string;
}

@Injectable({ providedIn: 'root' })
export class TrilhasService {
  private readonly trilhas = {
    golpesFinanceiros: { nome: 'Golpes Financeiros', faixa: '50+' },
    segurancaDados: { nome: 'Segurança de Dados', faixa: '18-50' },
    segurancaJogos: { nome: 'Segurança em Jogos Digitais', faixa: 'crianças e adolescentes' },
  };

  trilhaPorIdade(idade: number): Trilha {
    if (idade < 0) {
      throw new Error('Idade inválida');
    }
    if (idade < 18) {
      return this.trilhas.segurancaJogos;
    }
    if (idade <= 50) {
      return this.trilhas.segurancaDados;
    }
    return this.trilhas.golpesFinanceiros;
  }
}
