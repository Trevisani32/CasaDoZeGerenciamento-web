import { Component, signal } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-configuracao',
  standalone: true,
  imports: [Card],
  templateUrl: './configuracao.html',
  styleUrl: './configuracao.css',
})
export class Configuracao {
  protected readonly title = signal('Configuração');
}
