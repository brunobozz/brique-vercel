import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  public postLogin(user: any) {
    return this.http.post('/api/klabrique/v1/auth', user);
  }

  login(doc: string, token: string) {
    console.log(doc + ' - ' + token);
    return new Promise((resolve) => {
      window.localStorage.setItem('doc', doc);
      window.localStorage.setItem('token', token);
      resolve(true);
    });
  }

  logout() {
    return new Promise((resolve) => {
      window.localStorage.clear();
      resolve(true);
    });
  }
}
