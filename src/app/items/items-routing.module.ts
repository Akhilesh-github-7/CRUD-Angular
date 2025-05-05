import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path:"items/home",component:HomeComponent},
  {path:"items", redirectTo:"Items/home", pathMatch:"full"},
  {path:"", redirectTo:"Items/home", pathMatch:"full"},
  {path:"items/create",component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
