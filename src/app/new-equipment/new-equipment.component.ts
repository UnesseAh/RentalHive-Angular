import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EquipmentService} from "../services/equipment.service";
import {Equipment} from "../model/equipment.model";

@Component({
  selector: 'app-new-equipment',
  templateUrl: './new-equipment.component.html',
  styleUrl: './new-equipment.component.css'
})
export class NewEquipmentComponent implements OnInit{
  public equipmentForm! : FormGroup;

  constructor(private formBuilder : FormBuilder, private equipmentService : EquipmentService) {
  }

  ngOnInit() {
    this.equipmentForm = this.formBuilder.group({
      name : this.formBuilder.control('', [Validators.required]),
      description : this.formBuilder.control('', [Validators.required]),
      serialNumber : this.formBuilder.control('', [Validators.required]),
      model : this.formBuilder.control('', [Validators.required]),
      price : this.formBuilder.control(0, [Validators.required]),
      color : this.formBuilder.control('', [Validators.required]),
      fuel : this.formBuilder.control('', [Validators.required]),
      checked : this.formBuilder.control(false),
    })
  }

  saveEquipment(){
    let equipment : Equipment = this.equipmentForm.value;
    this.equipmentService.saveEquipment(equipment)
        .subscribe({
          next : data => {
            alert(JSON.stringify(data));
          }, error : err => {
            console.log(err)
          }
        })
  }
}
