import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./modules/login/login').then(m => m.Login),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/dashboard/dashboard').then(m => m.Dashboard),
      },
    ],
  },
  {
    path: 'cliente',
    loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/cliente/clientes').then(m => m.Clientes),
      },
    ],
  },
  {
    path: 'fornecedores',
    loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/fornecedores/fornecedores').then(m => m.Fornecedores),
      },
    ],
  },
  {
    path: 'funcionarios',
    loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/funcionario/funcionario').then(m => m.Funcionario),
      },
    ],
  },
  {
    path: 'produtos',
    loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/produtos/produtos').then(m => m.Produtos),
      },
    ],
  },
  {
    path: 'cardapios',
    loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/cardapios/cardapios').then(m => m.Cardapios),
      },
    ],
  },
  {
    path: 'financeiro',
    loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/financeiro/financeiro').then(m => m.Financeiro),
      },
    ],
  },
  {
    path: 'relatorio',
    loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/relatorio/relatorio').then(m => m.Relatorio),
      },
    ],
  },
  {
    path: 'configuracoes',
    loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/configuracao/configuracao').then(m => m.Configuracao),
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];