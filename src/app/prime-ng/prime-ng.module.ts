import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import{SidebarModule} from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    SidebarModule,
    MenuModule,
    DividerModule
    
  ],
  exports: [
    ButtonModule,
    DropdownModule,
    InputTextModule,
    SidebarModule,
    MenuModule,
    DividerModule
  ]

})
export class PrimeNgModule { }
