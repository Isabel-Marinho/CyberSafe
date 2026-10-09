import { Injectable } from '@angular/core';
import { Video } from '../../core/models/video.model';
import { VIDEOS } from './videos.data';

/** Caminho relativo (sem barra no início) para funcionar também no GitHub Pages */
export const VIDEOS_BASE_PATH = 'assets/videos';

@Injectable({ providedIn: 'root' })
export class VideosService {
  listarPorTrilha(trilhaId: string): Video[] {
    return VIDEOS.filter((video) => video.trilhaId === trilhaId);
  }

  buscarPorId(id: string): Video | undefined {
    return VIDEOS.find((video) => video.id === id);
  }

  urlDoVideo(video: Video): string {
    return `${VIDEOS_BASE_PATH}/${video.trilhaId}/${video.arquivo}`;
  }
}
