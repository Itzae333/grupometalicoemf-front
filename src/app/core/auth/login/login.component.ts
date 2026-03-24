import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../../services/loader.service';
import { ToastService } from '../../services/toast.service';

interface UsuarioSesion {
  username: string;
  rol: 'ADMIN' | 'USER' | 'SAT' |'NOT' |'CON';
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(
    private router: Router,
    private loader: LoaderService,
    private toast: ToastService
  ) {}
login() {

  console.log(this.username, this.password);

  this.loader.show();

  setTimeout(() => {

    this.loader.hide();

    // ===== ADMIN =====
    if (this.username === 'admin' && this.password === 'admin') {

      const usuario: UsuarioSesion = {
        username: 'admin',
        rol: 'ADMIN'
      };

      localStorage.setItem('usuario', JSON.stringify(usuario));

      this.toast.success('Bienvenido administrador 🚀');

      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 1500);
    }

    // ===== USER =====
    else if (this.username === 'user' && this.password === 'user') {

      const usuario: UsuarioSesion = {
        username: 'user',
        rol: 'USER'
      };

      localStorage.setItem('usuario', JSON.stringify(usuario));

      this.toast.success('Bienvenido usuario');

      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 1500);
    }

    // ===== SOLO SAT =====
    else if (this.username === 'sat' && this.password === 'sat') {

      const usuario: UsuarioSesion = {
        username: 'sat',
        rol: 'SAT'
      };

      localStorage.setItem('usuario', JSON.stringify(usuario));

      this.toast.success('Acceso SAT habilitado');

      setTimeout(() => {
        this.router.navigate(['/sat/dashboard']);
      }, 1500);
    }

    // ===== SOLO SAT =====
    else if (this.username === 'not' && this.password === 'not') {

      const usuario: UsuarioSesion = {
        username: 'not',
        rol: 'NOT'
      };

      localStorage.setItem('usuario', JSON.stringify(usuario));

      this.toast.success('Acceso NOT habilitado');

      setTimeout(() => {
        this.router.navigate(['/notificaciones/dashboard']);
      }, 1500);
    }

    // ===== SOLO SAT =====
    else if (this.username === 'con' && this.password === 'con') {

      const usuario: UsuarioSesion = {
        username: 'con',
        rol: 'CON'
      };

      localStorage.setItem('usuario', JSON.stringify(usuario));

      this.toast.success('Acceso CON habilitado');

      setTimeout(() => {
        this.router.navigate(['/conciliacion/dashboard']);
      }, 1500);
    }

    else {

      this.toast.error('Usuario o contraseña incorrectos');

    }

  }, 3000);

}

}