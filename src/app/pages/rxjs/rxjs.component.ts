import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, retry, interval, take, map, filter, Subscription } from "rxjs";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styleUrls: ["./rxjs.component.css"],
})
export class RxjsComponent implements OnInit, OnDestroy{

  intervalSubs!: Subscription

  constructor() {
    // aca me suscribo a ese valor emitido y me imprime el valor cada vez que se genere
    // cada vez que salga y entre a este componente se repetira el set interval por eso es bueno suscribirse
    // obs$.subscribe(resp => {
    //   console.log(resp);
    // });

    //el pipe puede transformar la informacion o reintentar a realizar su funcion
    // el retry intenta una y otra vez
    // this.retornaObservable().pipe(

    //   retry(2)

    // ).subscribe({

    //   next: valor => console.log('Subs:', valor),
    //   error: err => console.warn('Error', err),
    //   complete: () => console.info('Obs terminado')

    // });

   this.intervalSubs =  this.retornaIntervalo().subscribe(console.log);
  }
  

  retornaIntervalo(): Observable<any> {
    // take solo toma el o los valores deseados en este caso 4 emisiones del observable
    // el taje toma los 4 valores el map toma la informacion y la tranformo en el valor + 1 por lo que ahora
    // empieza del 1 y no del 0 el conteo del interval
    // si yo quiisera mostrar un hola mundo en el console del map solo eso mostrara el hola mundo 4 veces
    // el map me permite extraer la infomracion que solo ocupare de una respuesta de una api
    return interval(100).pipe(
      map(valor => valor + 1), //el metodo filtra los pares y los deja pasar de lo contrario se detiene
      filter(valor => (valor % 2 == 0 ? true : false)),
      take(10),
      );
  }

  retornaObservable(): Observable<any> {
    let i = -1;

    const obs$ = new Observable((observer) => {
      const interval = setInterval(() => {
        // inicializo en menos 1 y aca en el interval lo aumento en 1
        // luego uso la variable observer .net para emitir el valor i que se genera cada 1 segundo
        i++;
        observer.next(i);

        if (i == 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i == 2) {
          console.log("i = 2.... error");

          observer.error("i llego al valor de 2");
        }
      }, 1000);
    });

    return obs$;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe()
  }
}
