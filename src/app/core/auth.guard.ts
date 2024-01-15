import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
// ActivatedRouteSnapshot,
// RouterStateSnapshot,
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  //   ,
  canActivate(
    _next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    this.router.navigate(['/log-in'], {
      queryParams: {
        returnUrl: state.url,
      },
    });
    return false;
  }
}
