import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';

export const routes: Routes = [
    {path:"", redirectTo: "/dashboard", pathMatch:"full"},
    {path:"login", component: LoginComponent},
    {path:"register", component: RegisterComponent},
    {path:"dashboard", component: DashboardComponent},
    {path:"**", component:NotFoundComponent}

];
