import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighscoresComponent } from './components/highscores/highscores.component';

const routes: Routes = [
  { path: "", component: HighscoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
