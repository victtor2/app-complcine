import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { Component } from '@angular/core';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { LoginComponent } from './pages/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent},
    { 
        path: 'peliculas',
        component: PeliculasComponent,
        ...canActivate(() => redirectUnauthorizedTo(["/login"]))
    },
    { path: 'tickets', component: TicketsComponent},
    { path: 'about', component: AcercadeComponent},
    { path: 'peliculas/:id', component: PeliculaComponent },
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/inicio', pathMatch: 'full'},
    { path: '**', component: NotFoundComponent}
    
];
