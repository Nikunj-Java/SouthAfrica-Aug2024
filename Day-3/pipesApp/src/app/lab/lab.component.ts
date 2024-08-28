import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent {
  taskForm: FormGroup;
  tasks: Array<{ name: string, dueDate: string, priority: string }> = [];

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['Medium', Validators.required]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value); // Verify form values
      this.tasks.push(this.taskForm.value);
      this.taskForm.reset({ priority: 'Medium' });
    }
  }
}