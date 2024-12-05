import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, TicTacToeComponent, CalculadoraComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeComponent, TicTacToeComponent, CalculadoraComponent],
})
export class ComponentsModule {}
