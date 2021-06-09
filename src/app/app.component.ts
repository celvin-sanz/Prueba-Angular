import { Component } from '@angular/core';
import { Gestiones } from './models/gestiones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba';
  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }

  arreglogestiones: Gestiones[] = [
    {Gestion: 25, Nombre: "Eduardo Ramirez", DPI:"2097353921109"},
    {Gestion: 26, Nombre: "Eduardo Ramirez", DPI:"2097353921109"},
    {Gestion: 28, Nombre: "Eduardo Ramirez", DPI:"2097353921109"},
    {Gestion: 36, Nombre: "Eduardo Ramirez", DPI:"2097353921109"},
    {Gestion: 37, Nombre: "Eduardo Ramirez", DPI:"2097353921109"},
    {Gestion: 63, Nombre: "Eduardo Ramirez", DPI:"2097353921109"},
    {Gestion: 90, Nombre: "Eduardo Ramirez", DPI:"2097353921109"},
    
  ];

}
