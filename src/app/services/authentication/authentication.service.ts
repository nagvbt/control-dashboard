import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { api } from '../api';
import { Storage } from '../constants';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  //const val;
  public authenticate(username: string, password: string) {
    let req = { "username": username, "password": password, "rememberMe": "false" };
    return this.http.post(api.authentication.LOGIN, req)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }

}
