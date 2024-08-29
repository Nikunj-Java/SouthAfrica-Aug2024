import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DemoComponent } from './demo/demo.component';
import { CrudComponent } from './crud/crud.component';
 

const routes: Routes = [
  {path:"uservice",component:UserComponent},
  {path:"demo",component:DemoComponent},
  {path:"crud",component:CrudComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
