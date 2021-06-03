import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from "../services/alert/alert.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  form = new FormGroup(
    {
      username: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      passwordConfirm: new FormControl("", [Validators.required]),
    },
    { validators: this.checkPasswords, updateOn: "submit" }
  );

  constructor(private http: HttpClient, private router: Router, private alert: AlertService) {}

  ngOnInit(): void {}

  register() {
    if (this.form.valid) {
      this.http
        .post("users/register", {
          username: this.form.controls.username.value,
          email: this.form.controls.email.value,
          password: this.form.controls.password.value,
        })
        .subscribe((resp) => {
          this.alert.createAlert('Succefully created new account, please log in.', 'info');
          this.router.navigate(["login"]);
        });
    }
  }

  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    const password = group.get("password").value;
    const confirmPassword = group.get("passwordConfirm").value;

    return password === confirmPassword ? null : { notSame: true };
  }
}
