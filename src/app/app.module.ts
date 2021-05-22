import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { MarkdownModule } from "ngx-markdown";
import { AppRoutingModule } from "./app-routing.module";
import { AuthInterceptorService } from "./services/auth-interceptor/auth-interceptor.service";
import { BaseUrlService } from "./services/base-url/base-url.service";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {  
}
