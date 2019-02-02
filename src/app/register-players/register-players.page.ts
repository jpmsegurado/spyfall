import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import places from '../places.js'

@Component({
  selector: 'app-register-players',
  templateUrl: './register-players.page.html',
  styleUrls: ['./register-players.page.scss'],
})
export class RegisterPlayersPage {

  public form: FormGroup;
  public jogadores: Array<String> = []

  constructor(
    private navCtrl: NavController
  ) {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required)
    })

    const jogadores = localStorage.getItem('jogadores')

    if (jogadores) {
      this.jogadores = JSON.parse(jogadores)
    }
  }

  submit () {
    if (this.form.valid) {
      this.jogadores.push(this.form.value.nome)
      this.form.reset()
    }
  }

  remove (index) {
    this.jogadores.splice(index, 1)
  }

  start (jogadores) {
    localStorage.setItem('jogadores', JSON.stringify(jogadores))
    const random = Math.floor(Math.random() * places.length)
    localStorage.setItem('local', places[random])
    this.navCtrl.navigateForward('game')
  }

}
