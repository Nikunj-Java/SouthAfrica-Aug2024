import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipes } from './CustomPipe';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FormComponent } from './form/form.component';
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabComponent } from './lab/lab.component';
import { CustomDatePipe } from './CustomDatePipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CustomPipes,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    GallaryComponent,
    ChildAComponent,
    ChildBComponent,
    FormComponent,
    TformComponent,
    RformComponent,
    LabComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
