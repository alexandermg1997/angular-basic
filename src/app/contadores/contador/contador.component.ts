import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h4>La base actual es: {{ base }}</h4>
    <button (click)="restar(base)">-5</button>
    <span>{{ numero }}</span>
    <button (click)="sumar(base)">+5</button>
  `,
})
export class ContadorComponent {
  title = 'Contador App';
  numero: number = 10;

  base: number = 5;

  sumar(base: number) {
    this.numero += base;
  }

  restar(base: number) {
    this.numero -= base;
  }
}
