import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {DatosFormularioInterface} from '../other/DatosFormularioInterface'
import {HttpClient, HttpParams} from '@angular/common/http'
import {CiudadEstadoInterface} from '../other/DatosFormularioInterface'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private _http:HttpClient) {
   
   }

  api_url: string = 'https://localhost:7188/api'
  EnviarFormulario(data:DatosFormularioInterface):Observable<DatosFormularioInterface>{
  return this._http.post<DatosFormularioInterface>(`${this.api_url}/EnvioFormulario/EnviarDatosFormulario`,data)
  }

  ObtenerCiudades(): Observable<CiudadEstadoInterface[]> {

    return this._http.get<CiudadEstadoInterface[]>(`${this.api_url}/EnvioFormulario/ObtenerListaCiudades`);
  }
 
  // ObtenerCiudades(data:CiudadEstadoInterface):Observable<CiudadEstadoInterface>{
  //   return this._http.get<CiudadEstadoInterface>(`${this.api_url}/EnvioFormulario/ObtenerListaCiudades`,data)
  // }
}
