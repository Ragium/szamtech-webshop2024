import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { FilterComponent } from '../../shared/components/filter/filter.component';
import { ProductBoxComponent } from '../../shared/components/product-box/product-box.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { ProductHeaderComponent } from '../../shared/components/product-header/product-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModuleModule } from '../../shared/shared-module/shared-module.module';

@NgModule({
  declarations: [
    ProductsComponent,
    FilterComponent,
    ProductBoxComponent,
    ProductHeaderComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    SharedModuleModule

  ]
})
export class ProductsModule { }
