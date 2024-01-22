import { Component, OnInit } from '@angular/core';
import  {Router}  from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

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
      help_text: "For more information on Ionic, please see <a href='https://ionicframework.com/docs/'>our docs</a>.",
      class:""
    },
    {
      title: "",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "../../assets/images/3.webp",
      help_text: "For more information on Ionic, please see <a href='https://ionicframework.com/docs/'>our docs</a>.",
      
    }
  ]

  constructor(private router:Router) {}
  goToHome(){
    console.log("go to intro");
    this.router.navigateByUrl('/home')
  }

  ngOnInit() {
  }

}