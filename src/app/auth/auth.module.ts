import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRouter } from './auth.routing';
import { MaterialModule } from '../core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AuthRouter,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
