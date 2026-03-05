import { Component, signal } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-fornecedor',
  standalone: true,
  imports: [Card],
  templateUrl: './fornecedores.html',
  styleUrl: './fornecedores.css',
})
export class Fornecedores {
  protected readonly title = signal('Fornecedores');
}
