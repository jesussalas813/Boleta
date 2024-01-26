import { Component } from '@angular/core';
import  {Router}  from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(
<<<<<<< HEAD
    private router: Router,
    private storage: Storage
    ){}
    
=======
    private router:Router,
    private storage: Storage
    ) {}
>>>>>>> 4ab301e3f92fd5737942fb5d2ca11e9b56bb5deb
  goToIntro(){
    console.log("go to intro");
    this.router.navigateByUrl('/intro');
    this.storage.set('mostreLaIntro', true);
  }
}
