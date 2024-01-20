import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The Ionic Component Documentation showcases a number of useful components that are included out of the box with Ionic.",
      image: "../../assets/images/1.webp",
      help_text: "For more information on Ionic, please see <a href='https://ionicframework.com/docs/'>our docs</a>.",
      class: "slide-1 red-title"
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "../../assets/images/2.webp",
      help_text: "For more information on Ionic, please see <a href='https://ionicframework.com/docs/'>our docs</a>.",
      class: ""
    },
    {
      title: "",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "../../assets/images/3.webp",
      help_text: "For more information on Ionic, please see <a href='https://ionicframework.com/docs/'>our docs</a>.",
      class: "slide-3"
    },
    {
      title: "What is Ionic Pro?",
      description: "The <b>Ionic Pro</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "../../assets/images/4.webp",
      help_text: "For more information on Ionic, please see <a href='https://ionicframework.com/docs/'>our docs</a>.",
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
