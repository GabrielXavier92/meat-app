import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user.model';
import { LoginService } from './../../core/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  navigateTo: string;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private actRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
    this.navigateTo = this.actRoute.snapshot.params['to'] || btoa('/');
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((user: User) => {
        console.log(`Bem vindo ${user.name}`);
      }, response /*HttpErrorResponse*/ => {
        console.log(`${response.error.message}`);
      }, () => {
        this.router.navigate([atob(this.navigateTo)]);
      })

  }

}
