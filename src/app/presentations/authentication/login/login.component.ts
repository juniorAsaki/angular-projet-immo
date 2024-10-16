import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {  HttpClient, HttpClientModule, } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent  implements OnInit {

  profileForm!:FormGroup;

  constructor(private formBuilder:FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.profileForm=this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        password:['' , [Validators.required]]
      }
    )
  }

  login(){
    if(this.profileForm.valid){
      console.log(this.profileForm.value)
    this.authService.login(this.profileForm.value).subscribe(
      data => {
        console.log(data);
        this.profileForm.reset();
      },
      error => {
        console.log(error);
        this.profileForm.reset();
      }
    
    )
  }else(console.log('okkoo'))
  }
}
