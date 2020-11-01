import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './components/about-us.component'; // Modulo importando
import { AboutUsRoutingModule } from './about-us-routing.module';
import { SharedModule} from './../shared/shared.module'

import { MaterialModule } from './../material/material.module';

@NgModule({
    declarations:[
        AboutUsComponent
    ],
    imports: [
        CommonModule,
        AboutUsRoutingModule,
        SharedModule,
        MaterialModule
    ]
})

export class AboutUsModule {}