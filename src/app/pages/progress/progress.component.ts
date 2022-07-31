import { Component, OnInit } from '@angular/core';
import { publishBehavior } from 'rxjs';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  // input es de padre a hijo
  // out put es de hijo a padre 

  // parametrizo el progreso 1 y el 2 
  // obtengo estos valores con get getProgreso
  // por lo que progreso 1 y 2 seran los valores que esten por defecto en los input de mi componente hijo
  // para esto usamos el input
  // declaro la funcion de cambio valor hijo con event para comunicar al componente hijo incrementador el valor elegido al
  // pulsar las teclas menos o mas
  // por lo que el valor de progreso1 o 2 va a ser igual

  // FUNCIONAMIENTO INPUT OUTPUT
  // declaro el progreso1 y 2 con sus valores
  // los obtegno en el html para pintar las barras de progreso
  // envio este valor al hijo incrementador para pintar los input mediante @input 

  // luego mediante output en el incrementador componente hijo, emito el valor generado 
  // que va de 5 en o -5 segun boton que pulse 

  // el componente padre recibe el valor del evento emitido 
  // y mediante la funcion cambioValor hijo decimos que el progreso 1 o 2 es igual a ese Valor 
  // por lo que nuestra barra se pintara segun el valor emitido

  //para la clase use un input para enviar desde aca del padre al hijo incrementador
  // la clase que quiero que tenga mis botones y pintar los compoenntes incrementadores como desee 
  // ya que en el componente incrementador le dije que su clase fuera btnClass mediante ngClass, osea el input que use 
  // por lo tanto aca le digo que el segundo componente incrementador sea btn-info
  // la concatenacion de btn + btn-primary la hice en ngonint del componente hijo incrementador
  // por lo que en el segundo componente elegi que su clase de boton fuera btn-info para el segundo incrementador
  // asi tiene el mismo color que la barra

  progreso1: number = 25;
  progreso2: number = 35;

  constructor() {
  }

  ngOnInit(): void {
  }

  get getProgreso1(){
    return `${this.progreso1}%`
  }

  get getProgreso2(){
    return `${this.progreso2}%`
  }

  cambioValorHijo(valor:number){
   return
   
  }

}
