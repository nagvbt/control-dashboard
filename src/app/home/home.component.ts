import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  AfterViewInit,
  DoCheck,
} from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent implements OnInit {
  tiles = [
    { text: "LP / CP", cols: 1, rows: 1, color: "lightblue" },
    { text: "Feed", cols: 1, rows: 1, color: "lightgreen" },
    { text: "Azimuth", cols: 1, rows: 1, color: "lightpink" },
    { text: "Elevation", cols: 1, rows: 1, color: "#DDBDF1" },

    { text: "Modes", cols: 2, rows: 2, color: "#DDBDF1" },
    { text: "Other 1", cols: 1, rows: 5.5, color: "#DDBDF1" },
    { text: "Other 2", cols: 1, rows: 2, color: "#DDBDF1" },
  ];
  myFunction() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    document.getElementById("demo").innerHTML =
      "Width: " + w + "<br>Height: " + h;
  }

  constructor() {}
  resizeToMinimum() {
    var minimum = [996, 333];
    var current = [window.outerWidth, window.outerHeight];
    var restricted = [];
    var i = 2;

    while (i-- > 0) {
      restricted[i] = minimum[i] > current[i] ? minimum[i] : current[i];
    }

    window.resizeTo(current[0], current[1]);
  }
  onResize() {
    console.log("event called");
    // window.addEventListener('resize', this.resizeToMinimum, false);
    if (window.innerWidth < 900 || window.innerHeight < 600) {
      window.resizeTo(1024, 800);
    }
  }

  status: 1;
  id;

  set() {
    // this.id = setInterval(() => {
    //   this.dataService.getStatus().subscribe(
    //     (resultArray) => (this.status = resultArray),
    //     (error) => console.log("Error :: " + error)
    //   );
    // }, 1000);
  }

  dest() {
    clearInterval(this.id);
  }
  ngOnInit() {
    this.set();
  }
}
