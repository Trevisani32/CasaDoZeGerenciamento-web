import { Component, signal } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [Card],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
  protected readonly title = signal('Clientes');
}