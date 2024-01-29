import { Component, OnInit } from '@angular/core';
import  {Router}  from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage   {

  slides = [
    {
      head: "../../assets/images/cine.png",
      title: "Welcome to Mytickets!",
      image: "../../assets/images/tikets.png",
      description: "<b>¡ La opotunidad de conseguir tu boleta !</b> a la felicidad al alcance de un click",
      help_text: "<b>¡ Registrate ahora para empezar a comprar tus boletas ! </b>"
      
    },
    {
      title: "Easy to use !",
      description: "Consulta tus eventos favoritos y aparta tus entradas.",
      head: "../../assets/images/etapa.png",
      help_text: "<b>Consigue las boletas a los eventos que no te puedes perder tan facil como 1,2,3,4.</b> ",
      image: "../../assets/images/teatro.png",
      image1: "../../assets/images/concierto.png",
      class:""
    },
    {
      title: "All events in one place",
      description: "No esperes mas registrate y empieza a disfrutar",
      image: "../../assets/images/estadio.png",
      help_text: "Desde eventos deportivos, peliculas, obras de teatros, conciertos, fiestas, etc. entra y busca el evento de tu preferencia",
      
    }
  ]

  constructor(
    private router:Router,
    private storage: Storage
    ) {}
  
  goToHome(){
    console.log("go to login");
    this.router.navigateByUrl('/login')
  }

  goToLogin(){
    console.log("go to Register");
    this.router.navigateByUrl('/register')
  }

  ionViewDidEnter (){
    this.storage.set('mostreLaIntro', true);

    
  }

  

}