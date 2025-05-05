import { Component } from '@angular/core';
import { Items } from '../items';

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

}
