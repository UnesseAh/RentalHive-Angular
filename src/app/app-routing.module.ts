import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EquipmentsComponent} from "./equipments/equipments.component";
import {NewEquipmentComponent} from "./new-equipment/new-equipment.component";

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "equipments", component : EquipmentsComponent},
  {path : "newEquipment", component : NewEquipmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
