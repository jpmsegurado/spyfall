import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RevealPageComponent } from '../reveal-page/reveal-page.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage {

  public jogadores: Array<any> = []
  public spyPlayerIndex: Number = -1;
  public firstPlayerIndex: Number = -1
  public local: String;

  constructor (
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) {

  }

  ionViewDidEnter () {
    const str = localStorage.getItem('jogadores')
    this.local = localStorage.getItem('local')
    const jogadores: Array<String> = JSON.parse(str)
    this.jogadores = jogadores.map((nome) => ({
      nome,
      verificado: false
    }))

    const len = jogadores.length;
    const index = localStorage.getItem('spyPlayerIndex')
    const playerIndex = localStorage.getItem('firstPlayerIndex')
    if (index != null) {
      this.spyPlayerIndex = parseInt(index)
      this.firstPlayerIndex = parseInt(playerIndex)
    } else {
      const spyPlayerIndex = Math.floor(Math.random() * len);
      const firstPlayerIndex = Math.floor(Math.random() * len);
      this.spyPlayerIndex = spyPlayerIndex
      this.firstPlayerIndex = firstPlayerIndex
      localStorage.setItem('spyPlayerIndex', String(spyPlayerIndex))
      localStorage.setItem('firstPlayerIndex', String(firstPlayerIndex))
    }
  }

  async verificar (index) {
    const isSpy = this.spyPlayerIndex === index
    const { nome } = this.jogadores[index]
    const local = this.local
    const modal = await this.modalCtrl.create({
      component: RevealPageComponent,
      componentProps: { isSpy, nome, local }
    })

    this.jogadores[index].verificado = true

    modal.present()
  }

  finalizar () {
    localStorage.removeItem('local')
    localStorage.removeItem('spyPlayerIndex')
    this.navCtrl.navigateForward('home')
  }

}
