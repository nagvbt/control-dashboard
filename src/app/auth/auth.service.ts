import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { User } from "./user";
import { AuthenticationService } from "../services/authentication/authentication.service";

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  login(user: User) {
    if (user.userName !== "" && user.password !== "") {
      this.authenticationService
        .authenticate(user.userName, user.password)
        .subscribe(
          (result) => {
            let timelineData = result;
          },
          (error) => {
            console.log(error);
          }
        );
      this.loggedIn.next(true);
      this.router.navigate(["/"]);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(["/login"]);
  }
}
