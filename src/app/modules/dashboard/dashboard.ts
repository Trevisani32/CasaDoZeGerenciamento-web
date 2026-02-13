import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Card } from 'primeng/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, Card],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
