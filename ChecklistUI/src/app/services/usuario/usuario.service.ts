import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  checklistUrl = 'https://localhost:5001/api/Usuarios';  // URL to web api

  constructor(
    private http: HttpClient) {
  }

  /** GET heroes from the server */
  getUsuarios (): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.checklistUrl);
  }
  addUsuario (usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.checklistUrl, usuario);
  }
  deleteUsuario (id: number): Observable<{}> {
    const url = `${this.checklistUrl}/${id}`;
    return this.http.delete(url);
  }
}
