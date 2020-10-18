import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit { // Siempre tiene el onInit, es una buena practica como inicializacion asi esta vacio
  title = 'platzi-store';
  items = ['Ingrid', 'Fernanda', 'Banguero'];
  power = 10;
  constructor() { }

  ngOnInit(): void {
  }
  addItem(): void{
    this.items.push('Nuevo item');
  }
  deleteItem(index: number): void{ // Tipaje con TS
    this.items.splice(index, 1);
  }
}
