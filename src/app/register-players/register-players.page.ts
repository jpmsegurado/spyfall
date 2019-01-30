import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register-players',
  templateUrl: './register-players.page.html',
  styleUrls: ['./register-players.page.scss'],
})
export class RegisterPlayersPage {

  private form: FormGroup;
  private jogadores: Array<String> = []

  constructor(
    private navCtrl: NavController
  ) {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required)
    })
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
    this.navCtrl.navigateForward('game')
  }

}
