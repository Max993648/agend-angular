import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Max';
  surname = 'Pisoni';
  mail = 'massimiliano.pisoni@marconirovereto.it';
  colore: string = 'green';
}

export class ContattoComponen {
  contatto: Contatto = new Contatto('Max',)
}
