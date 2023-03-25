import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta } from '../../class/venta';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss'],
})
export class VentasComponent implements OnInit {

  baseUrl:string = "http://localhost:3000/ventas";
  data: Venta[]; 
  Tipo = [];  
  Porcentaje = [];  
  chart : any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.baseUrl).subscribe((result: Venta[]) => {  
      result.forEach(x => {  
        this.Tipo.push(x.tipo);  
        this.Porcentaje.push(x.porcentaje);  
      });  
      this  
      this.chart = new Chart('canvas', {  
        type: 'pie',  
        data: {  
          labels: this.Tipo,  
          datasets: [  
            {  
              data: this.Porcentaje,  
              borderColor: '2F5B88',  
              backgroundColor: [  
                "#21354E",  
                "#BFCFDF",  
                "#D7E1ED"
              ],  
              fill: true  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: true,
            position: 'right',
            labels: {
              fontColor: '2F5B88',
              fontSize:18
            }
            
          },  
          scales: {  
            xAxes: [{  
              display: false  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        },
          
      });  
    });  
  }
 
}
