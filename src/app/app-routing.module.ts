import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register-players', loadChildren: './register-players/register-players.module#RegisterPlayersPageModule' },
  { path: 'game', loadChildren: './game/game.module#GamePageModule' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
