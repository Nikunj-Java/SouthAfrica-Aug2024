import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent{


  registerForm:FormGroup;
  submitted:boolean=false;
  /*for any compile time erro need to change tsConfig.json File */
  /*strictPropertyInitialization": false */
  constructor(private buider:FormBuilder) { }

  ngOnInit() {
    this.registerForm=this.buider.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
    })
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){

    this.submitted=true;
    if(!this.registerForm.valid)
      return;
    alert("Form Submitted Successfully...!");
  }

}
