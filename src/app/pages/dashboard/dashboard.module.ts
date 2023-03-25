import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { VentasComponent } from '../../components/ventas/ventas.component';
import { ActividadesComponent } from '../../components/actividades/actividades.component';
import { TarjetasComponent } from '../../components/tarjetas/tarjetas.component';
import { ClimaComponent } from '../../components/clima/clima.component';
import { AddActividadComponent } from '../../components/add-actividad/add-actividad.component';
import { AddTarjetaComponent } from '../../components/add-tarjeta/add-tarjeta.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage

  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage,VentasComponent,TarjetasComponent,ClimaComponent,ActividadesComponent,AddActividadComponent,AddTarjetaComponent]
})
export class DashboardPageModule {}
