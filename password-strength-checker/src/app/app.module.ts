import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordStrengthCheckerComponent } from './password-strength-checker/password-strength-checker.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthCheckerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // добавить здесь
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }