import { Component, signal } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [Card],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  protected readonly title = signal('Produtos');
}
