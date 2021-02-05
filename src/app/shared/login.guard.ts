import { JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BackService } from './back.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private bs: BackService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.bs.currentUser !== undefined) {
      console.log('hmm');

      return true;
    } else {
      this.router.navigate(['login']);
      localStorage.setItem('auth', JSON.stringify(false));
      return false;
    }
  }
}
