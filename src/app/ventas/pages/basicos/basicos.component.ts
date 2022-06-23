import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower   : string = 'joaquin';
  nombreUpper   : string = 'JOAQUIN';
  nombreCompleto: string = 'JoAQuin cOelHo';
  
  fecha: Date = new Date();

}
