import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent {
  matrix: string[][] = this.matrixSize(5);
  clickCounter: number = 0;

  winner: string = '';

  matrixSize(size: number): string[][] {
    const matrix: string[][] = [];
    for (let i = 0; i < size; i++) {
      const row: string[] = [];
      for (let j = 0; j < size; j++) {
        row.push(' ');
      }
      matrix.push(row);
    }
    return matrix;
  }

  counterClick(rowIndex: number, columnIndex: number) {
    this.clickCounter++;
    if (this.matrix[rowIndex][columnIndex] === ' ') {
      this.matrix[rowIndex][columnIndex] =
        this.clickCounter % 2 === 0 ? 'X' : 'O';
    }
  }
}
