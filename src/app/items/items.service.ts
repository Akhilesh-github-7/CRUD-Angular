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


  create(data:Items){
    return this._httpClient.post("http://localhost:3000/items",data)
  }

  getById(id:Number){
    return this._httpClient.get<Items>(`http://localhost:3000/items/${id}`)
  }

  update(data:Items){
    return this._httpClient.put<Items>(`http://localhost:3000/items/${data.id}`,data)
  }

  delete(id:Number){
    return this._httpClient.delete<Items>(`http://localhost:3000/items/${id}`)
  }
}
