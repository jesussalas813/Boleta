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
      head: "../../assets/images/entradas.png",
      title: "<b>Welcome to Mytickets!</b>",
      image: "",
      description: "<b>¡ La opotunidad de conseguir tu boleta ..!</b> ",
      help_text: " a la felicidad al alcance de un click"
      
    },
    {
      title: "Easy to use !",
      description: "Consulta tus eventos favoritos y aparta tus entradas, consigue las boletas a los eventos que no te puedes perder tan facil como 1,2,3,4.",
      head: "",
      class:""
    },
    {
      title: "All events in one place",
      description: "No esperes mas registrate y empieza a disfrutar",
      image: "",
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
    

    
  }

  

}