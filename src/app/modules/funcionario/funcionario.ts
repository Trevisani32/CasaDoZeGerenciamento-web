import { Component, signal } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-funcionario',
  standalone: true,
  imports: [Card],
  templateUrl: './funcionario.html',
  styleUrl: './funcionario.css',
})
export class Funcionario {
  protected readonly title = signal('Funcionarios');
}
