import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapaPage } from './mapa.page';
import { MapaGoogleComponent } from '../../components/mapa-google/mapa-google.component';
import { AgmCoreModule } from '@agm/core';
const routes: Routes = [
  {
    path: '',
    component: MapaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6FU9TUY7b7RCyt623fJ8ewtQYEKTlVcA'
    })
  ],
  declarations: [MapaPage,MapaGoogleComponent]
})
export class MapaPageModule {}
