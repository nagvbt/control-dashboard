import { Component, OnInit } from "@angular/core";
import { EventStreamService } from "../../core/event-stream/event-stream.service";

@Component({
  selector: "app-state",
  templateUrl: "./state.component.html",
  styleUrls: ["./state.component.css"],
})
export class StateComponent implements OnInit {
  a: number = 1;
  b: number = 1;
  c: number = 1;
  p: number = 1;

  ab;

  constructor(public eventStreamService: EventStreamService) {}

  ngOnInit() {}

  exit() {
    this.eventStreamService.raiseEvent("showHideMasterMode");
  }

  stop() {}

  run() {}

  az = false;
  el = false;
  fe = false;
  po = false;

  met() {}

  fun(val: string) {
    switch (val) {
      case "az": {
        this.az = !this.az;
        break;
      }
      case "el": {
        this.el = !this.el;
        break;
      }
      case "fe": {
        this.fe = !this.fe;
        break;
      }
      case "po": {
        this.po = !this.po;
        break;
      }
    }
  }
}
