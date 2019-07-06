import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  TOKEN = localStorage.getItem('token');

  constructor(private api: ApiService,
    private http: HttpClient) { }

    public listar() {
      return this.http.get(this.api.getBaseUrl() + 'pais/listar?token=' + this.TOKEN, {});
    }

    public renovarToken() {
      return this.http.get(this.api.getBaseUrl() + 'usuario/renovar-ticket?token=' + this.TOKEN, {});
    }
}
