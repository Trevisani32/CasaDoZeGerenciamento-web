import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Menubar } from 'primeng/menubar';
import { Menu } from 'primeng/menu';
import { PrimeTemplate } from 'primeng/api';
import type { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NgClass, RouterLink, Menubar, Menu, PrimeTemplate, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  topMenuItems: MenuItem[] = [];
  sideBarVisible = true;

  toggleSideBar(): void {
    this.sideBarVisible = !this.sideBarVisible;
  }

  sideMenuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
    { label: 'Clientes', icon: 'pi pi-users', routerLink: '/cliente' },
    { label: 'Fornecedores', icon: 'pi pi-users', routerLink: '/fornecedores' },
    { label: 'Funcionários', icon: 'pi pi-users', routerLink: '/funcionarios' },
    { label: 'Produtos', icon: 'pi pi-box', routerLink: '/produtos' },
    { label: 'Cardápios', icon: 'pi pi-list', routerLink: '/cardapios' },
    { label: 'Financeiro', icon: 'pi pi-dollar', routerLink: '/financeiro' },
    { label: 'Relatórios', icon: 'pi pi-chart-line', routerLink: '/relatorio' },
    { label: 'Configurações', icon: 'pi pi-cog', routerLink: '/configuracoes' },
  ];
}
