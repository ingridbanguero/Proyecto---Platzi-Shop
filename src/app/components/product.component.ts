import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChange,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import { Product } from '../product.model';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements /* OnChanges */DoCheck, OnInit, OnDestroy {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor(){ // Cuantas veces se ejecuta mi constructor
        console.log('Mi Constructor');
    }
    /* ngOnChanges(changes: SimpleChanges){
        console.log('ngOnChanges');
        console.log(changes);
    } */
    ngOnInit(){ // Se ejecuta cuando el componente fue puesto en pantalla
        console.log('ngOnInit');
    }
    ngDoCheck(){ // No funciona si esta OnChanges, ya que ambos detectan camibos
        console.log('ngDoCheck');
    }
    ngOnDestroy(){
        console.log('ngOnDestroy');
    }
    addCart(){
        console.log('Agregado al carrito');
        this.productClicked.emit(this.product.id);
    }
}