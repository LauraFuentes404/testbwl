import { Component, OnInit } from '@angular/core';
declare let latActual: any;
declare let lngActual: any;
@Component({
  selector: 'app-mapa-google',
  templateUrl: './mapa-google.component.html',
  styleUrls: ['./mapa-google.component.scss'],
})
export class MapaGoogleComponent implements OnInit {
  coordenada:string="";
  zoom: number = 8;
 


  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  mapType:string="hybrid";
 
  constructor() { }

  ngOnInit() {
    this.buscarUbicacion();
  }
  changeMap(type:string){ 
    this.mapType=type;
  }

  validarCordenada(){
    var arrayCoordenada= this.coordenada.split(",");
    var latTempo= Number(arrayCoordenada[0]);
    var lngTempo= Number(arrayCoordenada[1]);
     if((latTempo >-90 || latTempo < 90) && (lngTempo >-180 || lngTempo < 180) ){
      this.lat=latTempo;
      this.lng=lngTempo;
     }else{ 
      alert("Las coordenadas no estan en los siguientes rangos latitud: -90 a 90 , longitud: -180 a");
     }
   
   }
  
   buscarUbicacion() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.verUbicacionActual(position);
      });
    } else {
      alert("El navegador no soporta geolocalización");
    }
  }
  verUbicacionActual(position) {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
  }
}
