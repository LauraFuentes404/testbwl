import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Actividad } from '../../class/actividad';


@Component({
  selector: 'app-add-actividad',
  templateUrl: './add-actividad.component.html',
  styleUrls: ['./add-actividad.component.scss'],
})
export class AddActividadComponent implements OnInit {
  constructor(private restService: RestService) { }
  actividades = [];

  ngOnInit() {
  }


  onSave(formData: any){
    let newTodo: any = { actividad: formData.actividad,hora:formData.hora ,fecha: formData.fecha };
    this.restService.addActividad(newTodo)
      .subscribe(
        (data: Actividad) => location.reload(),
        (error) => console.log(error)
      );
  }
}
