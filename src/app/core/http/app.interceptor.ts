import { Injectable } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage, RouteName } from '../../services/constants';

import { AuthenticationService } from '../../services/authentication/authentication.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(    private locationStrategy: LocationStrategy
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.getToken();
    if (this.isTokenExpired(token)) {
      window.localStorage.removeItem(Storage.AUTH_TOKEN);
      window.location.href = this.locationStrategy.getBaseHref() + RouteName.LOGIN;
      return;
    }

    let interceptedReq = req.clone({ url: this.updateUrl(req.url), setHeaders: { 'Cookie': 'NG_TRANSLATE_LANG_KEY=%22en%22' } });

    if (req.url) {
      interceptedReq = interceptedReq.clone({ setHeaders: { 'Content-Type': 'application/json' } });
      interceptedReq = interceptedReq.clone({ setHeaders: { 'DNT': '1' } });
      interceptedReq = interceptedReq.clone({ setHeaders: { 'Access-Control-Allow-Origin': '*' } });
    } else if (token) {
      interceptedReq = interceptedReq.clone({ setHeaders: { 'Authorization': token } });
    }
    return next.handle(interceptedReq);
  }

  private updateUrl(url: string) {
    return (url.startsWith('http') ? url : this.formatUrl(url));
  }

  private formatUrl(path: string): string {
    return window.location.protocol + '//' + window.location.hostname + ':9090' + (path.startsWith('/') ? '' : '/') + path;
  }


  public isTokenExpired(token: string) {
    const jwtPayload = this.parseToken(token);
    if (jwtPayload) {
      const ticksTill1970 = 621355968000000000;
      return Date.now() * 10000 > (jwtPayload.exp - ticksTill1970);
    }
    return false;
  }

  public getToken() {
    return window.localStorage.getItem(Storage.AUTH_TOKEN);
  }

  public parseToken(token: string) {
    if (token) {
      const payload = token.split('.')[1].replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(payload));
    }
    return null;
  }
}


export const HTTP_OVERRIDE_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
};
