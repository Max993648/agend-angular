import { Component } from '@angular/core';

//importazione simile a java di component da libreria di angular core

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})

export class ContattoComponent {
  contatto: Contatto = new Contatto('Max', 'Pisoni', 'max.pisoni@gmail.com','123456789', 5); 


}