import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout.component';
import { AuthLayoutComponent } from './shared/layout/app-layouts/auth-layout.component';

const routes: Routes = [{
    path: '',
    component: MainLayoutComponent,
    data: { pageTitle: 'Home' },
    children: []
}, {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: './auth/auth.module#AuthModule'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouter { }
