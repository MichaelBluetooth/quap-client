import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      if (evt.url.indexOf("#") === -1) {
        window.scrollTo(0, 0);
      } else {
        setTimeout(() => {
          const anchor = evt.url.split("#")[1];
          const anchorEl = document.getElementById(anchor);
          anchorEl.scrollIntoView();
        }, 1);
      }
    });
  }
}
