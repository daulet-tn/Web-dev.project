import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';
  errorMessage = '';

  onLogin() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Fill all fields';
      return;
    }

    console.log('Login:', this.username, this.password);

    // потом подключим backend
  }
}