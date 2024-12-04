import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  currentInput: string = '0';
  buttons: string[] = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    'C',
    '0',
    '+',
    '=',
  ];

  buttonRows: string[][] = [];

  constructor() {
    this.buttonRows = this.groupButtons(this.buttons, 4);
  }

  groupButtons(buttons: string[], size: number): string[][] {
    const rows = [];
    for (let i = 0; i < buttons.length; i += size) {
      rows.push(buttons.slice(i, i + size));
    }
    return rows;
  }

  handleButtonClick(button: string): void {
    if (button === 'C') {
      this.currentInput = '0';
    } else if (button === '=') {
      try {
        this.currentInput = eval(this.currentInput);
      } catch {
        this.currentInput = 'Error';
      }
    } else {
      this.currentInput =
        this.currentInput === '0' ? button : this.currentInput + button;
    }
  }
}
