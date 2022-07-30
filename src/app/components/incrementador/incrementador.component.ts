import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  progreso: number = 10;

  // obtengo el numero de progreso concatenado
  get getPorcentaje(){
    return `${this.progreso}%`;
  }

  cambiarValor( valor: number){

    // cuando llegue a 100 se quedara en 100 y si el valor tambien es mayor que cero
    if(this.progreso >= 100 && valor >= 0){
       return this.progreso = 100;
    }

    // cuando llegue a cero y el valor sea menor a cero la barra volvera a cero
    if(this.progreso <= 0 && valor < 0){
      return this.progreso = 0;
    }
    return this.progreso += valor
  }

  constructor() { }

  ngOnInit(): void {
  }

}
