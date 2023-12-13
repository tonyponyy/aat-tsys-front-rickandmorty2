import { Routes } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';

export const routes: Routes = [
  { path: 'crear', component: CrearComponent },
  { path: 'personaje/:id', component: PersonajeComponent },
  { path: 'editar/:id', component: EditarComponent },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'personajes',
    component: PersonajesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    component: NotFoundComponent, // Ruta para páginas no encontradas
  },
];
