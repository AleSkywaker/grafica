import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-grafica",
  templateUrl: "./grafica.component.html",
  styleUrls: ["./grafica.component.css"]
})
export class GraficaComponent implements OnInit {
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 75], label: "Ventas" }
  ];
  public lineChartLabels: Array<any> = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo"
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = "line";
  public lineChartOptions: any = {
    responsive: true
  };
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
    // setInterval(() => {
    //   const newData = [
    //     Math.round(Math.random() * 100),
    //     Math.round(Math.random() * 100),
    //     Math.round(Math.random() * 100),
    //     Math.round(Math.random() * 100),
    //     Math.round(Math.random() * 100)
    //   ];
    //   this.lineChartData = [{ data: newData, label: "ventas" }];
    // }, 3000);
  }

  getData() {
    this.http.get("http://localhost:5000/grafica").subscribe((data: any) => {
      this.lineChartData = data;
    });
  }
}
