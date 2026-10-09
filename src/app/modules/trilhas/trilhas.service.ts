import { Injectable } from '@angular/core';
import { Trilha, TrilhaId } from '../../core/models/trilha.model';
import { TRILHAS } from './trilhas.data';

@Injectable({ providedIn: 'root' })
export class TrilhasService {
  listar(): Trilha[] {
    return TRILHAS;
  }

  buscarPorId(id: string): Trilha | undefined {
    return TRILHAS.find((trilha) => trilha.id === id);
  }

  trilhaPorIdade(idade: number): Trilha {
    if (!Number.isFinite(idade) || idade < 0) {
      throw new Error('Idade inválida');
    }
    if (idade < 18) {
      return this.obter('jogos-digitais');
    }
    if (idade <= 50) {
      return this.obter('seguranca-dados');
    }
    return this.obter('golpes-financeiros');
  }

  private obter(id: TrilhaId): Trilha {
    const trilha = this.buscarPorId(id);
    if (!trilha) {
      throw new Error(`Trilha não encontrada: ${id}`);
    }
    return trilha;
  }
}
