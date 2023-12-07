import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EquipmentService} from "../services/equipment.service";
import {Equipment} from "../model/equipment.model";
import {filter, Observable} from "rxjs";

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.css'
})

// implement the interface OnInit to use the method ngOnInit()
export class EquipmentsComponent implements OnInit{
  // equipments : Array<any> = [
  //   {id : 1, name : "Norman Davis1", description : "description1", serialNumber : "7483583712", model : 1, price : 1.28, color : "red", fuel : 1, checked : false},
  //   {id : 2, name : "Norman Davis2", description : "description2", serialNumber : "748837126", model : 1, price : 2.28, color : "green", fuel : 2, checked : true},
  //   {id : 3, name : "Norman Davis3", description : "description3", serialNumber : "73583712", model : 1, price : 3.28, color : "black", fuel : 3, checked : false},
  //   {id : 4, name : "Norman Davis4", description : "description4", serialNumber : "8358372", model : 1, price : 4.28, color : "white", fuel : 1, checked : true},
  //   {id : 5, name : "Norman Davis5", description : "description5", serialNumber : "583712", model : 1, price : 5.28, color : "mint", fuel : 2, checked : false},
  //   {id : 6, name : "Norman Davis6", description : "description6", serialNumber : "74835", model : 1, price : 6.28, color : "yellow", fuel : 3, checked : true},
  // ]

  // equipments$! : Observable<Array<Equipment>>;
  equipments : Array<Equipment> = [];
    public keyword : string = "";

  // dependency injection
  constructor(private equipmentService : EquipmentService) {
  }

  // ngOnInit runs before the rendering of the component html and ts
  ngOnInit() {
    this.getEquipments();
  }
  getEquipments(){
    // the get method return an object of type observable of object
    this.equipmentService.getEquipments(1,5)
      .subscribe({
        next : data => {
          this.equipments = data
        },
        error : err => {
        console.log(err)
      }
    })
    // this.equipments$ = this.equipmentService.getEquipments();
  }


  handleCheckEquipment(equipment : Equipment) {
    this.equipmentService.checkEquipment(equipment)
      .subscribe({
      next : updatedEquipment => {
        equipment.checked != equipment.checked;
      }
    })
  }

  handleDelete(equipment : Equipment){
    if(confirm("Are you sure?"))
    this.equipmentService.deleteEquipment(equipment)
      .subscribe({
        next : value => {
          // this.getEquipments()
          this.equipments = this.equipments.filter(e => e.id != equipment.id)
        }
      })
  }

    searchEquipments(){
    this.equipmentService.searchEquipments(this.keyword).subscribe({
        next : value => {
            this.equipments = value;
        }
    })
  }
}
