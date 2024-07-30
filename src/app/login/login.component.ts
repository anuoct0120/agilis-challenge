import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { DummyjsonService } from '../dummyjson.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, HttpClientModule] // Include HttpClientModule here
})

export class LoginComponent {
  username = '';
  password = '';

  constructor(private dummyjsonService: DummyjsonService, private router: Router) {}

  login() {
    const user = { username: this.username, password: this.password };
    this.dummyjsonService.authenticate(user).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/product-list']);
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }
}
