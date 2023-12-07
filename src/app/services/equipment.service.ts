import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Equipment} from "../model/equipment.model";
import {EquipmentsComponent} from "../equipments/equipments.component";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http : HttpClient) { }

  public getEquipments(page : number = 1, size: number=4) : Observable<Array<Equipment>>{
    return this.http.get<Array<Equipment>>(`http://localhost:3000/equipments? page=${page}& limit=${size}`);
  }

  public checkEquipment(equipment : Equipment) : Observable<Equipment>{
    return this.http.patch<Equipment>(`http://localhost:3000/equipments/${equipment.id}`,
      {checked : !equipment.checked});
  }

  public deleteEquipment(equipment : Equipment) : Observable<Equipment>{
    return this.http.delete<any>(`http://localhost:3000/equipments/${equipment.id}`);
  }

  saveEquipment(equipment : Equipment) : Observable<Equipment>{
      return this.http.post<Equipment>(`http://localhost:3000/equipments `,equipment);
  }

    public searchEquipments(keyword:string) : Observable<Array<Equipment>>{
        return this.http.get<Array<any>>(`http://localhost:3000/equipments?name_like=${keyword}`);
    }
}
