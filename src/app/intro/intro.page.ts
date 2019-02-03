import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpts = {
    effect: 'flip'
  };

  index: Number = 0.

  @ViewChild(IonSlides) slides

  constructor(
    public navCtrl: NavController
  ) {}

  ngOnInit () {
    this.slides.ionSlideDidChange.subscribe(async () => {
      const index = await this.slides.getActiveIndex()
      this.index = index
    })
  }

  comecar () {
    localStorage.setItem('intro', 'done')
    this.navCtrl.navigateForward('register-players')
  }

}
