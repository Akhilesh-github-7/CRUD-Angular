import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from '../items';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{

  item:Items={
    id:0,
    name:'',
    category:'',
    brand:''
  }

  constructor(private itemsService:ItemsService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void{
    const id=this.route.paramMap.subscribe((params)=>{
      let id=Number(params.get('id'));
      this.getById(id);
    })
  }
getById(id:Number){
  this.itemsService.getById(id).subscribe((data)=>{
    this.item=data;
  })
}

cancel(){
  this.router.navigate(["items/home"])
}

update(){
  this.itemsService.update(this.item).subscribe({
    next:(data)=>{
      this.router.navigate(["items/home"])
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
}
