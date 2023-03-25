import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../../class/tarjeta';
import { RestService } from '../../services/rest.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
import { createAttribute } from '@angular/compiler/src/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss'],
})
export class TarjetasComponent implements OnInit {

  dataEdit: Tarjeta;
  tarjetas: Tarjeta[];
  displayOrNot: boolean = true;
  constructor( private restService: RestService,private config: NgbCarouselConfig) { 
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
  }

 
  ngOnInit() {
    this.getAllActividades();
    
  }

  getAllActividades(){
    this.restService.getTarjetas()
      .subscribe(
        (data: Tarjeta[]) =>  { 
          this.tarjetas = data;
          if(this.tarjetas.length > 0){
            this.displayOrNot = false;
          }else{
            this.displayOrNot = true;
          }
        }, 
        (error: any)   => console.log(error), 
        ()             => console.log(this.tarjetas)
      );
      
  }

  deleteActividad(id: number){
    this.restService.deleteTarjeta(id)
        .subscribe(
            (res: any) => {
                console.log('deleted');    
            },
            (error: any) => console.log(error)
        );
      for (var j = 0; j < this.tarjetas.length; j++) {
          var itemData = this.tarjetas[j];
          if (id==itemData.id) {
            this.tarjetas.splice(j, 1);
          }
      }
  }

 
  public onUpdate(formData: any){
    let editedActividad: any = { id: formData.id,empresa:formData.empresa, fecha: formData.fecha,numTarjeta: formData.numTarjeta};
    this.restService.updateTarjeta(editedActividad)
      .subscribe(
        //(data: Actividad) => location.reload(),
        (error) => console.log(error)
      );
      for (var j = 0; j < this.tarjetas.length; j++) {
        var itemData = this.tarjetas[j];
        if (formData.id==itemData.id) {
          itemData.empresa=formData.empresa;
          itemData.fecha=formData.fecha;
          itemData.numTarjeta=formData.numTarjeta;

        }
    }
  }


}
