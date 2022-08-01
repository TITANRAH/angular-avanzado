import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

// esta es la manera de llamar a una funciom creada en js en el archivo custom.js desde assets 
// la uso para que al recargar el sitio tome las configuraciones de este cuando refresque
// despues la inicializo en el ngoinit
declare function customInitFunctions():any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  
})
export class PagesComponent implements OnInit {


  constructor(private settingService: SettingsService) { }

  ngOnInit(){
    customInitFunctions();
   }

}
