import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  items:Items[]=[];

  constructor(private itemsService:ItemsService){}

  ngOnInit(): void {
    this.itemsService.getAllItem().subscribe((data)=>{
      this.items=data
    })
  }

  delete(id:Number){
    const isConfirmed = window.confirm("Are you sure you want to delete the data");

    if(isConfirmed){
       this.itemsService.delete(id).subscribe((data)=>{
      this.items=this.items.filter(itm=>itm.id!==id)
    })
    window.location.reload();
    }
  }

}
