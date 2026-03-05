import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Menubar } from 'primeng/menubar';
import { PanelMenu } from 'primeng/panelmenu';
import { PrimeTemplate } from 'primeng/api';
import type { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NgClass, RouterLink, Menubar, PanelMenu, PrimeTemplate, RouterOutlet],
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
    { label: 'Dashboard', 
      icon: 'pi pi-home', 
      routerLink: '/dashboard' 
    },
    { label: 'Clientes', 
      icon: 'pi pi-users', 
      items: [
        { label: 'Clientes Marmitas', icon: 'pi pi-user', routerLink: '/cliente' },
        { label: 'Clientes Assados', icon: 'pi pi-user', routerLink: '/cliente' },
        { label: 'Clientes Parmegianas', icon: 'pi pi-user', routerLink: '/cliente' },
        { label: 'Clientes Lanches', icon: 'pi pi-user', routerLink: '/cliente' },
        { label: 'Clientes Geral', icon: 'pi pi-user', routerLink: '/cliente' },
      ]
    },
    { label: 'Fornecedores', 
      icon: 'pi pi-truck', 
      items: [
        { label: 'Fornecedores Marmitas', icon: 'pi pi-truck', routerLink: '/fornecedores' },
        { label: 'Fornecedores Assados', icon: 'pi pi-truck', routerLink: '/fornecedores' },
        { label: 'Fornecedores Parmegianas', icon: 'pi pi-truck', routerLink: '/fornecedores' },
        { label: 'Fornecedores Lanches', icon: 'pi pi-truck', routerLink: '/fornecedores' },
        { label: 'Fornecedores Geral', icon: 'pi pi-truck', routerLink: '/fornecedores' },
      ]
    },
    { label: 'Funcionários', 
      icon: 'pi pi-users', 
      routerLink: '/funcionarios',
    },
    { label: 'Produtos', 
      icon: 'pi pi-box', 
      items: [
        { label: 'Produtos Marmitas', icon: 'pi pi-box', routerLink: '/produtos' },
        { label: 'Produtos Assados', icon: 'pi pi-box', routerLink: '/produtos' },
        { label: 'Produtos Parmegianas', icon: 'pi pi-box', routerLink: '/produtos' },
        { label: 'Produtos Lanches', icon: 'pi pi-box', routerLink: '/produtos' },
        { label: 'Produtos Geral', icon: 'pi pi-box', routerLink: '/produtos' },
      ]
    },
    { label: 'Cardápios', 
      icon: 'pi pi-list', 
      items: [
        { label: 'Cardápios Marmitas', icon: 'pi pi-list', routerLink: '/cardapios' },
        { label: 'Cardápios Assados', icon: 'pi pi-list', routerLink: '/cardapios' },
        { label: 'Cardápios Parmegianas', icon: 'pi pi-list', routerLink: '/cardapios' },
        { label: 'Cardápios Lanches', icon: 'pi pi-list', routerLink: '/cardapios' },
        { label: 'Cardápios Geral', icon: 'pi pi-list', routerLink: '/cardapios' },
      ]
    },
    { label: 'Financeiro', 
      icon: 'pi pi-dollar', 
      items: [
        { label: 'Financeiro Marmitas', icon: 'pi pi-dollar', routerLink: '/financeiro' },
        { label: 'Financeiro Assados', icon: 'pi pi-dollar', routerLink: '/financeiro' },
        { label: 'Financeiro Parmegianas', icon: 'pi pi-dollar', routerLink: '/financeiro' },
        { label: 'Financeiro Lanches', icon: 'pi pi-dollar', routerLink: '/financeiro' },
        { label: 'Financeiro Geral', icon: 'pi pi-dollar', routerLink: '/financeiro' },
      ]
    },
    { label: 'Relatórios', 
      icon: 'pi pi-chart-line', 
      items: [
        { label: 'Relatórios Marmitas', icon: 'pi pi-chart-line', routerLink: '/relatorio' },
        { label: 'Relatórios Assados', icon: 'pi pi-chart-line', routerLink: '/relatorio' },
        { label: 'Relatórios Parmegianas', icon: 'pi pi-chart-line', routerLink: '/relatorio' },
        { label: 'Relatórios Lanches', icon: 'pi pi-chart-line', routerLink: '/relatorio' },
        { label: 'Relatórios Geral', icon: 'pi pi-chart-line', routerLink: '/relatorio' },
      ]
    },
    { label: 'Configurações', 
      icon: 'pi pi-cog', 
      routerLink: '/configuracoes',
      items: []
    },
  ];
}
