import { Component, OnInit } from "@angular/core";
import { EventStreamService } from "../core/event-stream/event-stream.service";
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";

@Component({
  selector: "app-master-mode",
  templateUrl: "./master-mode.component.html",
  styleUrls: ["./master-mode.component.css"],
})
export class MasterModeComponent implements OnInit {
  isMaster = true;
  mode = "";

  isSlew = false;
  private subscription: Subscription;
  constructor(
    public eventStreamService: EventStreamService,
    private router: Router
  ) {
    this.subscription = this.eventStreamService
      .getEventObservable()
      .subscribe((event) => this.resumeDataEvents(event));
  }

  ngOnInit() {}

  private resumeDataEvents(events) {
    if (events === "showHideMasterMode") {
      this.isMaster = true;
    }
  }
  onModeBtn(key) {
    this.isMaster = false;
    switch (key) {
      case "STATE":
        this.mode = "STATE";
        break;
      case "TODO":
        this.mode = "TODO";
        break;
      default:
        break;
    }
  }
}
