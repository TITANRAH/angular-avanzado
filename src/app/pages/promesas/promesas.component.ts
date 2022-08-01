import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuario => {
      console.log(usuario)
      
    })

    // las promesas se usan cuando neesitamos realizar tarea a destiempo
    // las promesas se ejecutan despues de que algo suceda

    // const promesa = new Promise((resolve, reject)=>{


    //   if(false){

    //     resolve('Hola Mundo');
    //   }else{
    //     reject('Algo salio mal')
    //   }

      
    // });

    // // con en el then escucho cuando se resuelve la promesa funciona como un suscribe
    // // en los parentesis obtengo el resolve que ene ste caso le puse mensaje
    // // el parentesis asume el resolve
    // promesa.then((mensaje)=>{
    //   console.log(mensaje);
    // //el catch se muestra cuando ocurre el reject
    // }).catch (error => console.log('error en mi promesa',error));

    // console.log('Fin del Init');

    this.getUsuarios()
    
    
  }

  getUsuarios(){

      // fetch('https://reqres.in/api/users').then(resp => {
      //   resp.json().then(body => console.log(body)
      //   )
      // })

      const promesa = new Promise(resolve => {
        fetch('https://reqres.in/api/users').then(resp => resp.json())
                                            .then(body => resolve(body.data))

      });

      return promesa;

  }

}
