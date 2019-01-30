import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reveal-page',
  templateUrl: './reveal-page.component.html',
  styleUrls: ['./reveal-page.component.scss']
})
export class RevealPageComponent {

  @Input() isSpy;
  @Input() local;
  @Input() nome;

  constructor(
    private modalCtrl: ModalController
  ) { }

  close () {
    this.modalCtrl.dismiss()
  }

}
