import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  titulo!: string;
  tituloSubs$!: Subscription

  constructor(private router: Router,
              private route: ActivatedRoute) {
      // esta forma usa route para el efecto de leer parametros en las rutas          
     // console.log(route.snapshot.children[0].data);
      



  //  this.tituloSubs$ = this.getArgumentosRuta().subscribe(data => {
  //   console.log(data);
  //   this.titulo = data['titulo']

  //   //esto es para las pestañas de las paginas
  //   document.title = `AdminPro - ${this.titulo}`
    
  // })

   }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe
  }

  ngOnInit(): void {
  }

  getArgumentosRuta(){
     // primero le di a las rutas en pages routing modules el atributo data con la propiedad titulo en la ruta
    // despues le hice un console.log al evento suscribiendome para ver que tipo de evento era
    // luego inyecto el router el cual tiene una propiedad llamada events, uso pipes para filtrar
    // el evento que trae finalmente la propiedad titulo
   return this.router.events
    .pipe(
      filter( (event:any )=> event instanceof ActivationEnd),
      filter( (event:ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event:ActivationEnd)=> event.snapshot.data)
    )
  }

}
