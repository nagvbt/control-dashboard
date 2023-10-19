import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-graph-widget",
  templateUrl: "./graph-widget.component.html",
  styleUrls: ["./graph-widget.component.css"],
})
export class GraphWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      labels: {
        fontColor: "red",
      },
    },
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            backgroundColor: "red",
            fontSize: 14,
          },
        },
      ],
    },
  };
  public barChartColors = [
    {
      backgroundColor: ["#5b9bd5", "#2b470e"],
    },
  ];
  public barChartLabels: string[] = ["ML", "DL"];
  public barChartType: string = "horizontalBar";
  public barChartLegend: boolean = false;

  public barChartData: any[] = [{ data: [6, 55] }];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let data = [Math.round(Math.random() * 100), Math.random() * 100];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
