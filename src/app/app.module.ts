import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { NewEquipmentComponent } from './new-equipment/new-equipment.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  // This is where we declare web components
  // All the components that we use in this module
  declarations: [
    AppComponent,
    EquipmentsComponent,
    NewEquipmentComponent,
    HomeComponent,
  ],
  // all the modules that we use in our application
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, ReactiveFormsModule, FormsModule
  ],
  // Services. helps us with dependency injection
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
