import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonChip,
  IonContent,
  IonHeader,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { ProgressoService } from '../../modules/progresso/progresso.service';
import { VideosService } from '../../modules/videos/videos.service';

@Component({
  selector: 'app-video',
  imports: [
    IonBackButton,
    IonButton,
    IonButtons,
    IonChip,
    IonContent,
    IonHeader,
    IonLabel,
    IonTitle,
    IonToolbar,
  ],
  styles: [
    `
      video {
        width: 50%;
        border-radius: 12px;
        background: #000;
      }
    `,
  ],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button [defaultHref]="video ? '/trilha/' + video.trilhaId : '/home'"></ion-back-button>
        </ion-buttons>
        <ion-title>Vídeo</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      @if (video) {
        <video controls playsinline preload="metadata" [src]="url" (ended)="concluir()"></video>

        <h2>{{ video.titulo }}</h2>
        <p>{{ video.descricao }}</p>

        @if (assistido()) {
          <ion-chip color="success"><ion-label>Assistido</ion-label></ion-chip>
        } @else {
          <ion-button fill="outline" (click)="concluir()">Marcar como assistido</ion-button>
        }
      } @else {
        <p>Vídeo não encontrado.</p>
      }
    </ion-content>
  `,
})
export class VideoPage {
  private readonly rota = inject(ActivatedRoute);
  private readonly videosService = inject(VideosService);
  private readonly progressoService = inject(ProgressoService);

  readonly video = this.videosService.buscarPorId(this.rota.snapshot.paramMap.get('id') ?? '');
  readonly url = this.video ? this.videosService.urlDoVideo(this.video) : '';
  readonly assistido = signal(this.video ? this.progressoService.foiAssistido(this.video.id) : false);

  concluir(): void {
    if (this.video) {
      this.progressoService.marcarComoAssistido(this.video.id);
      this.assistido.set(true);
    }
  }
}
