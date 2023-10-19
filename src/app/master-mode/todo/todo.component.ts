import { Component, OnInit } from "@angular/core";
import { EventStreamService } from "../../core/event-stream/event-stream.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  constructor(public eventStreamService: EventStreamService) {}

  ngOnInit() {}

  exit() {
    this.eventStreamService.raiseEvent("showHideMasterMode");
  }

  stop() {}

  run() {}
}
