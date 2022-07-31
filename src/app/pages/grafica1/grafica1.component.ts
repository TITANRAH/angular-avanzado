import { Component, OnInit } from "@angular/core";

import { ChartData, ChartEvent, ChartType, Color } from "chart.js";

@Component({
  selector: "app-grafica1",
  templateUrl: "./grafica1.component.html",
  styleUrls: ["./grafica1.component.css"],
})
export class Grafica1Component implements OnInit{

  labels1 :string[] = []
  datasets1 :any[] = []

  labels2 :string[] = []
  datasets2 :any[] = []

  labels3 :string[] = []
  datasets3 :any[] = []

  labels4 :string[] = []
  datasets4 :any[] = []
 

  ngOnInit(){

    // GRAFICO 1
    
    this.labels1 = ["Nike", "Adidas", "Puma"];
   
      this.datasets1 =[
        { 
          data: [10, 80, 50], 
          backgroundColor: ['#00821C','#09DB36','#024D0F'],
          hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
          hoverBorderColor:['#000000','#000000','#00000003']
        },
      ]

       // GRAFICO 2

      this.labels2 = ["Movistar", "Wom", "Entel"];
   
      this.datasets2 =[
        { 
          data: [80, 30, 20], 
          backgroundColor: ['#00821C','#09DB36','#024D0F'],
          hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
          hoverBorderColor:['#000000','#000000','#00000003']
        },
      ]


       // GRAFICO 3

      this.labels3 = ["Rap", "Trap", "Reggaeton"];

      this.datasets3 =[
        { 
          data: [100, 30, 20], 
          backgroundColor: ['#00821C','#09DB36','#024D0F'],
          hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
          hoverBorderColor:['#000000','#000000','#00000003']
        },
      ]

      // GRAFICO 3

      this.labels4 = ["Letras", "Flow", "Puesta en Escena"];

      this.datasets4 =[
        { 
          data: [50, 40, 10], 
          backgroundColor: ['#00821C','#09DB36','#024D0F'],
          hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
          hoverBorderColor:['#000000','#000000','#00000003']
        },
      ]
      
  }


}
