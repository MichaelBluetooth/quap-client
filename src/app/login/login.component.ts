import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  login() {
    if (this.form.valid) {
      this.auth.login(
        this.form.controls.username.value,
        this.form.controls.password.value
      );
    }
  }
}
