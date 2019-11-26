import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { LoginService } from "../Login/login.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private route: Router) {}

  helper = new JwtHelperService();
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // console.log(this.helper.decodeToken(this.loginService.getToken()));
    // console.log(this.helper.isTokenExpired(this.loginService.getToken()));

    if (this.helper.isTokenExpired(this.loginService.getToken())) {
      this.loginService.removeToken();
      this.route.navigate(["/login"]);
    }
    return true;
  }
}
