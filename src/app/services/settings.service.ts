import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  linkTheme = document.querySelector("#theme")!;

  constructor() {
    // primero envie la variable al local storage en la funcion changeTheme
    // en el componente account luego en el primer compponente que se ve que es pages componente 
    // aca en el ngonit obtengo la variable del local y la vuelvo a enviar al linktheme que es el 
    // link que tengo en mi index con el id theme
    // lo traemos al servicio y como lo realizamos en el constructor al inuyectarlo
    // en page component actuara automaticamente 

    const url = localStorage.getItem("theme")!;
    this.linkTheme.setAttribute("href", url);
  
   }


   changeTheme(theme: string) {
    // el id theme viene del index html link ref que hace referencia al tema que estamos usando
    const url = `./assets/css/colors/${theme}.css`;

    //luego reemplazo el atributo href y le doy el valor de url
    this.linkTheme.setAttribute("href", url);

    localStorage.setItem("theme", url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(){

    const links = document.querySelectorAll('.selector');
    
    links.forEach( ele => {

      // primero obtengo los elementos que contengan la clase selector
      // segundo recorro los elementos que contiene link
      // tercero remuevo la clase working que es el que pone el check en la caja seleccionada
      // del color, luego creo 2 constantes btntheme contiene el atributo data-theme que es el atributo de cada li a; osea el color
      // cuarto creo la constante btnthemeurl que contiene el link del color que en este caso esta designado en la constante btnTheme 
      // quinto creo la constante currentTheme que contiene el atributo href de los elementos uego creo la condicion

      ele.classList.remove('working');
      const btnTheme = ele.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      // si la url es igual a la url que contiene el href agrega la clase que reaiza el check
      if(btnThemeUrl === currentTheme){
        ele.classList.add('working')
      }

    })
    

  }
}
