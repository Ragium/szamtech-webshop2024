import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(  
    private snackBar: MatSnackBar,
    private router: Router,
    private auth: AngularFireAuth,
    private afs : AngularFireStorage
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      const user = JSON.parse(localStorage.getItem('user') as string);
      if (user) {
        console.log(user);
        return true;
      }
      this.snackBar.open('Please log in to continue!', 'Ok',{
        duration: 3000,
      });
      this.router.navigateByUrl('/login')
      return false;
  }
  
}
