import { Component, Inject, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { userInfo } from "./components/login/login-state/log-in.action";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, HttpClientModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  private store = inject(Store<{userInfo : userInfo}>);
  private router = inject(Router);
  userData : any = {};
  userInfo$: Observable<userInfo>;
  ngOnInit(): void {
    this.userInfo$ = this.store.select("login");
    const userStr = localStorage.getItem('userData');
    this.userData = userStr ? JSON.parse(userStr) : {};
    
  }


  logout() {
    localStorage.setItem('userData' , '');
    this.router.navigate(['/log-in']);
  }
}
