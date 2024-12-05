import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  { path: 'tic-tac-toe', component: TicTacToeComponent },
  { path: 'calculadora', component: CalculadoraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
