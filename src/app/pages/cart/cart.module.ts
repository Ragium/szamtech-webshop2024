import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { SharedModuleModule } from '../../shared/shared-module/shared-module.module';
import { SuccessModule } from './success/success.module';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    SharedModuleModule,
    SuccessModule

  ]
})
export class CartModule { }
