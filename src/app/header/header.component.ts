import { Component } from "@angular/core";
import { AuthService } from "./../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  objDate;
  Date = new Date();

  now: any = new Date();
  start: any = new Date(this.now.getFullYear(), 0, 0);
  diff: any =
    this.now -
    this.start +
    (this.start.getTimezoneOffset() - this.now.getTimezoneOffset()) * 60 * 1000;
  oneDay = 1000 * 60 * 60 * 24;
  day;
  title = false;

  constructor(private authService: AuthService) {
    this.blink();
  }

  private blink() {
    setInterval(() => {
      this.objDate = new Date();
    }, 1);
    this.day = Math.floor(this.diff / this.oneDay);
    setInterval(() => {
      this.title = !this.title;
    }, 1000);
  }

  onLogout() {
    this.authService.logout();
  }
}
