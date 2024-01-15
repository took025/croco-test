import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { login, userInfo } from "./login-state/log-in.action";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule , RouterModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  loginForm: FormGroup;
  private store = inject(Store<{userInfo : userInfo}>);
  private router = inject(Router);

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      surrName: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }

  tryLogIn(){
    if (this.loginForm.valid) {
      const form =  JSON.stringify(this.loginForm.getRawValue());
      localStorage.setItem('userData', form);
      this.store.dispatch(login({payload : this.loginForm.getRawValue()}))
      this.router.navigate(['/slots']);
    }
  }
}
