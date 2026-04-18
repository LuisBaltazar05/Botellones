import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CatalogoFiltroComponent } from './components/catalogo-filtro/catalogo-filtro.component';
import { DetalleBotellaComponent } from './components/detalle-botella/detalle-botella.component';
import { AgregarBotellaComponent } from './components/agregar-botella/agregar-botella.component';
import { BuscarBotellasComponent } from './pages/buscar-botellas/buscar-botellas.component';
import { EditarBotellaComponent } from './pages/editar-botella/editar-botella.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio',      component: HomeComponent },
  { path: 'lista',       component: CatalogoFiltroComponent },
  { path: 'detalle/:id', component: DetalleBotellaComponent },
  { path: 'buscar',      component: BuscarBotellasComponent },
  { path: 'agregar',     component: AgregarBotellaComponent },
  { path: 'editar/:id',  component: EditarBotellaComponent },
  { path: 'carrito',     component: CarritoComponent },
  { path: 'not-found',   component: NotFoundComponent },
  { path: '**',          redirectTo: 'not-found' }
];
