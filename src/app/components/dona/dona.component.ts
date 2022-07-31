import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  @Input() title: string = 'Sin título'
  @Input() labels!: string[]
  @Input() data!: any[]

  doughnutChartType!: ChartType
  doughnutChartLabels!: string[]
  doughnutChartData!:ChartData<'doughnut'>
  
  constructor() { }
  // Doughnut
  ngOnInit(){

    this.doughnutChartType = 'doughnut';
    this.doughnutChartLabels = this.labels
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: this.data
    };
  }
 
 
  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
 
  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }



}
