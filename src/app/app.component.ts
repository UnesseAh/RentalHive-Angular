import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  actions : Array<any> = [
    {title : "Home", route : "/home", icon : "house"},
    {title : "Equipments", route : "/equipments", icon : "arrow-down-up"},
    {title : "New Equipment", route : "/newEquipment", icon : "plus-circle-dotted"},
  ];

  currentAction : any;

  setCurrentAction (action : any) {
    this.currentAction = action;
  }
}
