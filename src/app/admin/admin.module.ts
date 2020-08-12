import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LAYOUT_COMPONENTS } from './layout';
import { COMPONENTS } from './pages';
import { PIPES } from '@app/pipes';

@NgModule({
  declarations: [LAYOUT_COMPONENTS, COMPONENTS, PIPES],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
