import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private storage: Storage,
    private navCtrl: NavController
    ){}
  async canActivate(){
    const userLoggedIn = await  this.storage.get('userLoggedIn');
    if(userLoggedIn)  {
      return true;
    }else{
      //this.navCtrl.navigateForward('/intro');
      return true;
    }
  }
   
}
