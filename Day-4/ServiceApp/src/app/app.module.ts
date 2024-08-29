import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MydataService } from './mydata.service';
import { DemoComponent } from './demo/demo.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { CrudService } from './crud.service';
import { CrudComponent } from './crud/crud.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DemoComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientTestingModule,
    FormsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
