import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    MainComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
  
  ]
})
export class MainModule { }
