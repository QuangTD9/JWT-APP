import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LAYOUT_COMPONENTS } from './layout';
import { AdminComponent } from '@app/admin/admin.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LAYOUT_COMPONENTS, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ]
})
export class AdminModule { }
