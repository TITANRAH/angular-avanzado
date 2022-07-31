import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso: number = 10;
  @Input() btnClass :string = 'btn-primary'
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  // obtengo el numero de progreso concatenado
  // get getPorcentaje(){
  //   return `${this.progreso}%`;
  // }

  cambiarValor( valor: number){

    // cuando llegue a 100 se quedara en 100 y si el valor tambien es mayor que cero
    if(this.progreso >= 100 && valor >= 0){

      this.valorSalida.emit(100)
       return this.progreso = 100;
    }

    // cuando llegue a cero y el valor sea menor a cero la barra volvera a cero
    if(this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0)
      return this.progreso = 0;
    }

    this.progreso += valor
    return this.valorSalida.emit(this.progreso)
     
  }

  constructor() { }

  ngOnInit(): void {
    // aqui le concateno el btn al btnClass para que desde el padre solo envie el btn-class 
    this.btnClass = `btn ${this.btnClass}`
  }

  onChange(nuevoValor:number){

    // si el nuevo valor que es el ngmodelchange del mismo input es mayor o igual a 100 
    // la variable que controla mi barra en el componente padre es 100 y si es 
    // menor o igual a 0 progreso es igual a 0 si no progreso es igual a nuevo valor
    // y emito hacia el padre la variable progreso que estara actualizado
    if(nuevoValor >= 100){
      this.progreso = 100;
    }else if(nuevoValor <= 0){
      this.progreso = 0
    } else {
      this.progreso = nuevoValor;
    }

    this.valorSalida.emit(this.progreso)
    
    //this.valorSalida.emit(valor)
  }

}
