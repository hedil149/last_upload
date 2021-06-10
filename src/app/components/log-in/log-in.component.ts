import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
declare var $: any;
declare var kendo: any;
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  message: any;
  invalidLogin: boolean= false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authservice : AuthService) { }


  ngOnInit(): void {  this.loginForm = this.formBuilder.group({
    Email: ['', Validators.required],
    password: ['', Validators.required]
  });
  }
  get data() { return this.loginForm.controls; }



  onSubmit() {

    this.authservice.loginUser(this.loginForm.getRawValue()).subscribe(data=>{

      
      this.router.navigate(['/home']);

    })
   }


}

