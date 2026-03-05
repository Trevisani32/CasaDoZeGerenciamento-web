import { Component, signal } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-financeiro',
  standalone: true,
  imports: [Card],
  templateUrl: './financeiro.html',
  styleUrl: './financeiro.css',
})
export class Financeiro {
  protected readonly title = signal('Financeiro');
}
