import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Tarjeta } from '../../class/tarjeta';

@Component({
  selector: 'app-add-tarjeta',
  templateUrl: './add-tarjeta.component.html',
  styleUrls: ['./add-tarjeta.component.scss'],
})
export class AddTarjetaComponent implements OnInit {
  constructor(private restService: RestService) { }
  actividades = [];

  ngOnInit() {
  }


  onSave(formData: any){
    let newTodo: any = { empresa: formData.empresa,numTarjeta:formData.numTarjeta ,fecha: formData.fecha };
    this.restService.addTarjeta(newTodo)
      .subscribe(
        (data: Tarjeta) => location.reload(),
        (error) => console.log(error)
      );
  }

}
