import { UserService } from './../../shared/service/user.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/shared/user.model';
import { Response } from 'src/app/shared/response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formSignIn: FormGroup;
  isLoading = false;
  error: string;
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.formSignIn = this.fb.group({
      userName: this.fb.control('', [
        Validators.required,
        Validators.pattern(
          '^(?=.{3,10}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$'
        ),
      ]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  get userName() {
    return this.formSignIn.get('userName');
  }
  get password() {
    return this.formSignIn.get('password');
  }
  onSubmit() {
    this.isLoading = true;
    console.log(this.formSignIn.value);
    this.userService
      .login(this.formSignIn.value.userName, this.formSignIn.value.password)
      .subscribe(
        (resp: any) => {
          this.isLoading = false;
          this.userService.setUser(resp.data);
        },
        (error) => {
          this.isLoading = false;
          this.error = error.error.message;
          console.log(error.error.message);
        }
      );
  }
}
