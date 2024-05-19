import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  email = new FormControl('');
  password = new FormControl('');

  loadingSubsciption?: Subscription;
  loadingObservation?: Observable<boolean>;
  emailString = this.email.value as string;
  passString = this.password.value as string;
  loading: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }

  async login() {
    this.loading = true;
    
    this.authService.login(this.email.value as string, this.password.value as string).then(cred =>{
      console.log(cred);
      this.router.navigateByUrl('/products');
      console.log('Successfully logged in, ', this.email.value);
      this.loading=false;
    }).catch(error =>{
      console.error(error);
      this.loading = false;
    });
    
  }

  ngOnDestroy(){
    this.loadingSubsciption?.unsubscribe();
  }


}
