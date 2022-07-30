import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    
      BreadcrumbsComponent,
      SidebarComponent,
      HeaderComponent],
    exports:[
      BreadcrumbsComponent,
      SidebarComponent,
      HeaderComponent
    ],
    
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
