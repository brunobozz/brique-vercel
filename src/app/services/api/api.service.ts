import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private USER_DOC = window.localStorage.getItem('doc');
  private API_TOKEN = window.localStorage.getItem('token');
  private API_PREFIX = '/api/klabrique/v1/';
  private API_HEADERS = new HttpHeaders().append(
    'Authorization',
    '' + this.API_TOKEN
  );

  constructor(private http: HttpClient) {}

  public getDadosUser(endPoint: string) {
    return this.http.get(this.API_PREFIX + endPoint + this.USER_DOC, {
      headers: this.API_HEADERS,
    });
  }

  public getDadosCod(endPoint: string, codigo: string) {
    return this.http.get(this.API_PREFIX + endPoint + codigo, {
      headers: this.API_HEADERS,
    });
  }

  public getDados(endPoint: string) {
    return this.http.get(this.API_PREFIX + endPoint, {
      headers: this.API_HEADERS,
    });
  }

  public postItem(endPoint: string, data: any) {
    return this.http.post(this.API_PREFIX + endPoint, data, {
      headers: this.API_HEADERS,
    });
  }

  public postItemNoHeaders(endPoint: string, data: any) {
    return this.http.post(this.API_PREFIX + endPoint, data);
  }

  public deleteItem(endPoint: string, id: number) {
    return this.http.delete(this.API_PREFIX + endPoint + id, {
      headers: this.API_HEADERS,
    });
  }
}
