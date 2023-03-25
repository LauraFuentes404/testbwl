import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

import { Observable, throwError, Subject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Actividad } from '.././class/actividad';
import { Day } from '.././class/day';
import { Tarjeta } from '.././class/tarjeta';
import { Venta } from '.././class/venta';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl:string = "http://localhost:3000";
  baseUrlClima:string="http://api.openweathermap.org/data/2.5/forecast?q=Mexico,Veracruz&units=metric&APPID=2bea6e1fb3c03c2d7d9a2e9b7cca01c1";
 
  constructor(private  http : HttpClient) { }
  
  getForecast(): Subject<Array<any>>  {
    const dataSubject = new Subject<Array<any>>();
    this.http.get(this.baseUrlClima)
            .subscribe((weather: any) => {
        dataSubject.next(weather.list);
      });
    return dataSubject;
  }
  getActividades(): Observable<Actividad[]>{
    return this.http.get<Actividad[]>(`${this.baseUrl}/actividades`);
  }

  getActividad(id: number): Observable<Actividad>{
      return this.http.get<Actividad>(`${this.baseUrl}/actividades/${id}`);
  }

  addActividad(newTodo:Actividad): Observable<Actividad>{
      return this.http.post<Actividad>(`${this.baseUrl}/actividades`, newTodo, {
          headers: {
              'Content-Type': 'application/json'
          }
      });
  }

  updateActividad(editedTodo:Actividad): Observable<Actividad>{
      return this.http.put<Actividad>(`${this.baseUrl}/actividades/${editedTodo.id}`, 
      editedTodo, {
          headers: {
              'Content-Type': 'application/json'
          }
      });
  }

  deleteActividad(id:number): Observable<Actividad>{
      return this.http.delete<Actividad>(`${this.baseUrl}/actividades/${id}`);
  }
  
  getTarjetas(): Observable<Tarjeta[]>{
    return this.http.get<Tarjeta[]>(`${this.baseUrl}/tarjetas`);
  }

  getTarjeta(id: number): Observable<Tarjeta>{
      return this.http.get<Tarjeta>(`${this.baseUrl}/tarjetas/${id}`);
  }

  addTarjeta(newTodo:Tarjeta): Observable<Tarjeta>{
      return this.http.post<Tarjeta>(`${this.baseUrl}/tarjetas`, newTodo, {
          headers: {
              'Content-Type': 'application/json'
          }
      });
  }

  updateTarjeta(editedTodo:Tarjeta): Observable<Tarjeta>{
      return this.http.put<Tarjeta>(`${this.baseUrl}/tarjetas/${editedTodo.id}`, 
      editedTodo, {
          headers: {
              'Content-Type': 'application/json'
          }
      });
  }

  deleteTarjeta(id:number): Observable<Tarjeta>{
      return this.http.delete<Tarjeta>(`${this.baseUrl}/tarjetas/${id}`);
  }

}
