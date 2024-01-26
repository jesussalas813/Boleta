import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

<<<<<<< HEAD
export class IntroGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage: Storage
  ) {}
=======

export class IntroGuard implements CanActivate {

constructor(
  private router: Router,
  private storage: Storage
  ) { }
>>>>>>> 4ab301e3f92fd5737942fb5d2ca11e9b56bb5deb

  async canActivate() {
    const mostreIntro = await this.storage.get('mostreLaIntro');
    if (mostreIntro) {
<<<<<<< HEAD
=======

>>>>>>> 4ab301e3f92fd5737942fb5d2ca11e9b56bb5deb
      return true;
    } else {
      this.router.navigateByUrl('/intro');
      return false;
    }
  }
    
}
  

