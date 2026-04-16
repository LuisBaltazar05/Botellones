import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ListaBotellasComponent } from './pages/lista-botellas/lista-botellas.component';
import { DetalleBotellaComponent } from './pages/detalle-botella/detalle-botella.component';
import { BuscarBotellasComponent } from './pages/buscar-botellas/buscar-botellas.component';
import { AgregarBotellaComponent } from './pages/agregar-botella/agregar-botella.component';
import { EditarBotellaComponent } from './pages/editar-botella/editar-botella.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'lista', component: ListaBotellasComponent },
  { path: 'detalle/:id', component: DetalleBotellaComponent },
  { path: 'buscar', component: BuscarBotellasComponent },
  { path: 'agregar', component: AgregarBotellaComponent },
  { path: 'editar/:id', component: EditarBotellaComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];