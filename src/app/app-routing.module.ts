import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservatoriosComponent } from './modules/energia-armazenada/reservatorios/reservatorios.component';
import { SubsistemaComponent } from './modules/energia-armazenada/subsistema/subsistema.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'data/reservatorios',
    component: ReservatoriosComponent
  },
  {
    path: 'data/subsistema',
    component: SubsistemaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
