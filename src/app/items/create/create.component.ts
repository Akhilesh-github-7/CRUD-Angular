import { Component } from '@angular/core';
import { Items } from '../items';
import { ItemsService } from '../items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  item:Items={
    id:0,
    name:'',
    category:'',
    brand:''

  }

  constructor(private itemService:ItemsService,private router:Router){}

  create(){
    this.itemService.create(this.item).subscribe({
      next:(data)=>{
        this.router.navigate(["items/home"]);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  cancel(){
  this.router.navigate(["items/home"])
}
}
