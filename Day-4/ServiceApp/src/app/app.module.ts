import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MydataService } from './mydata.service';
import { DemoComponent } from './demo/demo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
