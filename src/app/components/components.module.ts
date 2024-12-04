import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';



@NgModule({
  declarations: [
    TicTacToeComponent,
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
