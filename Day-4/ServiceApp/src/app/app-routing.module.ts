import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {path:"uservice",component:UserComponent},
  {path:"demo",component:DemoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
