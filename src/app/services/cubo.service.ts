import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Registro } from 'src/models/registro';
import { Login } from 'src/models/login';
import { Token } from 'src/models/token';

@Injectable({
  providedIn: 'root'
})
export class CuboService {

  constructor(private _http: HttpClient) { }
  //Me devuelve todos los cubos
  getCubos(): Observable<any>{
    var request = "/api/cubos";
    var url = environment.urlApiTienda + request;
    return this._http.get(url);
  }
  //me los filtra por marca
  getCuboByMarca(marca: string): Observable<any>{
    var request = "/api/Cubos/CubosMarca/"+marca;
    var url = environment.urlApiTienda + request;
    return this._http.get(url);
  } 
  //Me devuelve el string de las marcas
  getMarcas(): Observable<any>{
    var request = "/api/Cubos/Marcas";
    var url = environment.urlApiTienda + request;
    return this._http.get(url);
  }
  //Me devuelve un objeto Cubo
  getCuboById(idCubo: number): Observable<any>{
    var request = "/api/Cubos/"+idCubo;
    var url = environment.urlApiTienda + request;
    return this._http.get(url);
  }

  getComentarios(idCubo: number): Observable<any>{
    var request = "/api/ComentariosCubo/GetComentariosCubo/"+idCubo;
    var url = environment.urlApiTienda + request;
    return this._http.get(url);
  }

  //--------------- ZONA SEGURIDAD ---------------------//

  registroUser(usuario: Registro): Observable<any>{
    var json = JSON.stringify(usuario);
    var header = new HttpHeaders().set("Content-Type", "application/json");
    var request = "/api/Manage/RegistroUsuario";
    var url = environment.urlApiTienda + request;
    return this._http.post(url, json, {headers: header});
  }

  //Esto me tiene que devolver un token
  inicioSesion(user: Login): Observable<any>{
    var json = JSON.stringify(user);
    var header = new HttpHeaders().set("Content-Type", "application/json");
    var request = "/api/Manage/Login";
    var url = environment.urlApiTienda + request;
    return this._http.post(url, json, {headers: header});
  }

  setToken(token: Token){
    localStorage.setItem("token", token.response);
  }

  getToken(): string | null {
    let token = localStorage.getItem("token");
    if(token != null){
      return token;
    }
    return null;
  }
  //Para que muestre los datos del usuario ya existente
  getPerfilUser(token: string | null): Observable<any>{
    var header = new HttpHeaders().set("Authorization", "bearer "+ token);
    var request = "/api/Manage/PerfilUsuario";
    var url = environment.urlApiTienda + request;
    return this._http.get(url, {headers: header});
  }

  insertarPedido(idCubo: number, token: string | null): Observable<any>{
    var header = new HttpHeaders().set("Authorization", "bearer "+ token);
    var request = "/api/compra/insertarpedido/"+idCubo;
    var url = environment.urlApiTienda + request;
    return this._http.post(url, {headers: header});
  }
}
