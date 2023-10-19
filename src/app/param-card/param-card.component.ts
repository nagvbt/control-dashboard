import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-param-card",
  templateUrl: "./param-card.component.html",
  styleUrls: ["./param-card.component.css"],
})
export class ParamCardComponent implements OnInit {
  @Input() status: 1;
  constructor() {}

  ngOnInit() {}
}
