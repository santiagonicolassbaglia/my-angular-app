import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      if (username === 'admin' && password === 'admin123') {
        // Redirige al perfil de administrador (Welcome)
        this.router.navigate(['/welcome']);
      } else if (username === 'empleado' && password === 'empleado123') {
        // Redirige al perfil de empleado  (alta repartidor)
        this.router.navigate(['/alta-repartidor']);
      } else {
        this.errorMessage = 'Credenciales incorrectas. Inténtalo de nuevo.';
      }
    } else {
      this.errorMessage = 'Por favor, completa todos los campos.';
    }
  }

  loadAdminCredentials() {
    this.loginForm.patchValue({
      username: 'admin',
      password: 'admin123'
    });
  }
  loadEmployeeCredentials() {
    this.loginForm.patchValue({
      username: 'empleado',
      password: 'empleado123'
    });
  }


}
