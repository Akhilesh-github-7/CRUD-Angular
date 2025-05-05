import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private _httpClient:HttpClient) { }
  
  getAllItem(){
    return this._httpClient.get<Items[]>("http://localhost:3000/items");
  }
}
