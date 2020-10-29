import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

import { MatTableDataSource } from '@angular/material/table';
import { ViewDataServicesService } from '../services/view-data-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewDataModule } from '../models/view-data-models';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  name: string ="";
  username: string ="";
  email: string ="";
  registerForm: FormGroup;
  submitted = false;
  dataSource:MatTableDataSource<ViewDataModule>;
  displayColumns: string[] = ['name', 'email', 'username'];
  data: ViewDataModule[];

  constructor(private viewDataService: ViewDataServicesService, private fb: FormBuilder,private customValidator: CustomvalidationService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getTask();
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );

  }

  getTask(): void{
    // this.tasks = this.todoService.getTasks();
    let data = this.viewDataService.getData();
    this.dataSource = new MatTableDataSource(data);
    
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
  
      this.viewDataService.addData(this.registerForm.value.name,this.registerForm.value.email,this.registerForm.value.username);
      this.getTask();
      let message = "Data is added" + "";
      let action = "Ok"
      this.snackBar.open(message, action, {
        duration: 10000,
      });
      this.username = "";
      this.name = "";
      this.email = "";
     
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  remove(taskToRemove){
    this.viewDataService.checkIndexAndRemove(taskToRemove);
    this.getTask();
    let message =  "One row is deleted" + " ";
    let action = "Ok"
    this.snackBar.open(message, action, {
      duration: 20000,
    });
  }



}
