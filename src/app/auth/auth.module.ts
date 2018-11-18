import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRouter } from './auth.routing';

@NgModule({
  imports: [
    CommonModule,
    AuthRouter
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
