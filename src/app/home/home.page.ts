import { Component } from '@angular/core';
import  {Router}  from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  event_list:  any;
  categoria: any;
  option: any;
  constructor(
    private router:Router,
    private storage: Storage,
    private events: EventsService
    ) {}

  goToIntro(){
    console.log("go to intro");
    this.router.navigateByUrl('/intro');
    this.storage.set('mostreLaIntro', true);
  }
  
  categorias(){
    this.events.getCategories().then(
      rest => {
        this.categoria = rest;
        console.log("categorias", this.categoria)
      }
    );
  }
  selectoption(event:any){
    this.option = event.detail.value;
    console.log("la opcion seleccionada", event.detail.value);
  }


  ionViewDidEnter(){
    this.categorias();
    
    this.events.getEvents().then(
      res =>{
        this.event_list = res;
        console.log("Eventos desde el servidor",this.event_list)
      }
      )
      console.log("Local Events",this.events.getLocalEvents().events);
  }
}
