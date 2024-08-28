import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GallaryComponent } from './gallary/gallary.component';
import { PipesComponent } from './pipes/pipes.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FormComponent } from './form/form.component';
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"gallary",component:GallaryComponent,children:[
     {path:"",redirectTo:"child-a",pathMatch:"full"},
    {path:"child-a",component:ChildAComponent},
    {path:"child-b",component:ChildBComponent}
  ]},
  {path:"pipes",component:PipesComponent},
  {path:"forms",component:FormComponent,children:[
    {path:"",redirectTo:"tform",pathMatch:"full"},
   {path:"tform",component:TformComponent},
   {path:"rform",component:RformComponent}
 ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
