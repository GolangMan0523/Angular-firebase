import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route,
} from '@angular/router';

@Injectable()
export class Admins implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    // debugger
    if (localStorage.getItem('waw_user')) {
      let user = JSON.parse(localStorage.getItem('waw_user'));
      if (user.is && user.is.admin) return true;
      console.log(user);
      this.router.navigate(['/profile']);
      return false;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}

@Injectable()
export class Authenticated implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    // debugger
    const token = localStorage.getItem('waw_user');
    if (token !== 'null') {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}

@Injectable()
export class Guest implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    // debugger;
    if (localStorage.getItem('waw_user')) {
      return this.router.navigate(['/']);
    } else {
      return true;
    }
  }
}
