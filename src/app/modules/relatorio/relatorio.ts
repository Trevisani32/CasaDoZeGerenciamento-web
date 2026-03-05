import { Component, signal } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-relatorio',
  standalone: true,
  imports: [Card],
  templateUrl: './relatorio.html',
  styleUrl: './relatorio.css',
})
export class Relatorio {
  protected readonly title = signal('Relatórios');
}
