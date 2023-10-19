import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isLoggedIn.take(1).map((isLoggedIn: boolean) => {
      if (!isLoggedIn) {
        //b Un comment below line for the implementing login
        // this.router.navigate(['/login']);
        //b comment below line for the implementing login
        this.router.navigate(["/"]);
        return false;
      }
      return true;
    });
  }
}
