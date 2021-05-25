import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.less"],
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = this.auth.isAuthenticated$;
  form: FormGroup = new FormGroup({
    search: new FormControl(""),
  });

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }

  search() {
    const search = this.form.controls.search.value;
    this.form.controls.search.setValue("");

    if (search) {
      this.router.navigate(["/questions"], {
        queryParams: { text: search },
      });
    } else {
      this.router.navigate(["/questions"]);
    }
  }
}
