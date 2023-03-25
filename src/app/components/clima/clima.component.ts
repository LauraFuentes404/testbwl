import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Day } from '../../class/day';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss'],
})
export class ClimaComponent implements OnInit {
  days: Object[];
  displayOrNot: boolean = true;


  
  constructor(private restService: RestService) { }

  ngOnInit() {


    this.restService.getForecast().subscribe(
      (data: any) =>  { 
        this.days = data;
        console.log(this.days);
        
    }, 
    (error: any)   => console.log(error), 
    );
  }
  
}
