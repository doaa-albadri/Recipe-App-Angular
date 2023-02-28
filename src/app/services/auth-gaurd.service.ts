import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGaurd implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.authService.user.pipe(
      take(1),
      map((user) => {
        // using this > !!user means:
        // if theres a user this will turn it into a true boolean
        // if theres no user/its null this will turn it into a false boolean

        // we can return a boolean or promise or urltree according to the types
        // if true return true and if false return this url
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/auth']);
      })
    );

    // TESTING GUARDS
    // if authenticated allow access / if not dont allow
    // return this.authService.isAuth().then((auth: boolean) => {
    //   if (auth) {
    //     return true;
    //   } else {
    //     this.router.navigate(['/']);
    //     return false;
    //   }
    // });
  }
}
