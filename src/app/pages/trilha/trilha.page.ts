import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { TrilhasService } from '../../modules/trilhas/trilhas.service';
import { VideosService } from '../../modules/videos/videos.service';

@Component({
  selector: 'app-trilha',
  imports: [
    CommonModule,
    RouterLink,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar,
  ],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ trilha ? trilha.nome : 'Trilha' }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      @if (trilha) {
        <p>{{ trilha.descricao }}</p>

        <ion-list>
          @for (video of videos; track video.id) {
            <ion-item button detail [routerLink]="['/video', video.id]">
              <ion-label>
                <h3>{{ video.titulo }}</h3>
                <p>{{ video.descricao }}</p>
              </ion-label>
            </ion-item>
          }
        </ion-list>
      } @else {
        <p>Trilha não encontrada.</p>
      }
    </ion-content>
  `,
})
export class TrilhaPage {
  private readonly rota = inject(ActivatedRoute);
  private readonly trilhasService = inject(TrilhasService);
  private readonly videosService = inject(VideosService);

  readonly trilha = this.trilhasService.buscarPorId(this.rota.snapshot.paramMap.get('id') ?? '');
  readonly videos = this.trilha ? this.videosService.listarPorTrilha(this.trilha.id) : [];
}