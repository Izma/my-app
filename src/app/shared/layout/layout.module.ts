import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './header';
import { FooterModule } from './footer';
import { AuthLayoutComponent, MainLayoutComponent } from './app-layouts';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule
  ],
  declarations: [AuthLayoutComponent, MainLayoutComponent],
  exports: [
    HeaderModule,
    FooterModule
  ]
})
export class LayoutModule { }
