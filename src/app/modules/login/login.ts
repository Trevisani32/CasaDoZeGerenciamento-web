import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { Password } from 'primeng/password';
import { Checkbox } from 'primeng/checkbox';
import { PrimeTemplate } from 'primeng/api';

function senhasIguais(c: AbstractControl): ValidationErrors | null {
  const senha = c.get('password')?.value;
  const confirmar = c.get('confirmPassword')?.value;
  if (senha !== confirmar && confirmar !== '') return { senhasDiferentes: true };
  return null;
}

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    PrimeTemplate,
    Card,
    Button,
    InputText,
    FloatLabel,
    Password,
    Checkbox,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  /** true = login visível, false = cadastro visível (efeito cortina) */
  showLogin = signal(true);
  loginForm: FormGroup;
  cadastroForm: FormGroup;
  loading = signal(false);
  loadingCadastro = signal(false);

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false],
    });

    this.cadastroForm = this.fb.nonNullable.group(
      {
        name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: senhasIguais }
    );
  }

  goToCadastro(): void {
    this.showLogin.set(false);
  }

  goToLogin(): void {
    this.showLogin.set(true);
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;
    this.loading.set(true);
    // TODO: chamar serviço de autenticação
    console.log('Login', this.loginForm.getRawValue());
    setTimeout(() => {
      this.loading.set(false);
      this.router.navigate(['/dashboard']);
    }, 1000);
  }

  onSubmitCadastro(): void {
    if (this.cadastroForm.invalid) return;
    this.loadingCadastro.set(true);
    // TODO: chamar serviço de cadastro
    const { confirmPassword: _, ...payload } = this.cadastroForm.getRawValue();
    console.log('Cadastro', payload);
    setTimeout(() => this.loadingCadastro.set(false), 1000);
  }
}
