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
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from "./questions/confirm/confirm.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, AlertComponent, ConfirmComponent],
  imports: [
    BrowserModule,
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
