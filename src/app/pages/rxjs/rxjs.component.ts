import { Component, OnInit } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() {
    
    let i = -1;

    const obs$ = new Observable( observer => {


      const interval = setInterval(() => {

        // inicializo en menos 1 y aca en el interval lo aumento en 1
        // luego uso la variable observer .net para emitir el valor i que se genera cada 1 segundo
       i++
       observer.next(i);

       if ( i == 4){

        clearInterval(interval)
        observer.complete()
       }

       if ( i == 2){
        console.log('i = 2.... error');
        
        observer.error( 'i llego al valor de 2')
       }
        
      },1000)

    })
      // aca me suscribo a ese valor emitido y me imprime el valor cada vez que se genere
      // cada vez que salga y entre a este componente se repetira el set interval por eso es bueno suscribirse
      // obs$.subscribe(resp => {      
      //   console.log(resp);
      // });

      //el pipe puede transformar la informacion o reintentar a realizar su funcion
      // el retry intenta una y otra vez 
      obs$.pipe(

        retry(2)

      ).subscribe({
       
        next: valor => console.log('Subs:', valor), 
        error: err => console.warn('Error', err),
        complete: () => console.info('Obs terminado') 
        
      });


   }

  ngOnInit(): void {
  }

}
