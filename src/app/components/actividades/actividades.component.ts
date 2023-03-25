import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Actividad } from '../../class/actividad';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss'],
})
export class ActividadesComponent implements OnInit {
  dataEdit: Actividad;
  
  actividades: Actividad[];
  displayOrNot: boolean = true;
  constructor( private restService: RestService){
    
  }  
 
  ngOnInit() {
    this.getAllActividades();
  }

  getAllActividades(){
    this.restService.getActividades()
      .subscribe(
        (data: Actividad[]) =>  { 
          this.actividades = data;
          if(this.actividades.length > 0)
            this.displayOrNot = false;
          else
            this.displayOrNot = true;
        }, 
        (error: any)   => console.log(error), 
        ()             => console.log(this.actividades)
      );
  }
  deleteActividad(id: number){
    this.restService.deleteActividad(id)
        .subscribe(
            (res: any) => {
                console.log('deleted');    
            },
            (error: any) => console.log(error)
        );
      for (var j = 0; j < this.actividades.length; j++) {
          var itemData = this.actividades[j];
          if (id==itemData.id) {
            this.actividades.splice(j, 1);
          }
      }
  }

 
  public onUpdate(formData: any){
    let editedActividad: any = { id: formData.id, actividad: formData.actividad, fecha: formData.fecha,hora: formData.hora };
    this.restService.updateActividad(editedActividad)
      .subscribe(
        //(data: Actividad) => location.reload(),
        (error) => console.log(error)
      );
      for (var j = 0; j < this.actividades.length; j++) {
        var itemData = this.actividades[j];
        if (formData.id==itemData.id) {
          itemData.actividad=formData.actividad;
          itemData.fecha=formData.fecha;
          itemData.hora=formData.hora;

        }
    }
  }

}
