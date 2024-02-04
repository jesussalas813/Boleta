import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: 'El Email es obligatorio.' },
      { type: "pattern", message: "El Email ingresado no es valido." }
    ],
    password: [
      { type: "minlength", message: 'La contraseña ingresada no es valida.' },
      { type: "required", message: 'La contraseña es obligatoria.' }
    ]
  }
  loginMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.minLength(8),
          Validators.required,

        ])
      )
    })
  }


  ngOnInit() {
  }

  login(login_data: any) {
    console.log(login_data);
    this.authService.loginUser(login_data).then(res => {
      this.loginMessage = res;
      this.storage.set('userLoggedIn', true)
      this.navCtrl.navigateForward('menu/home')
    }).catch(error => {
      this.loginMessage = error;
    })
  }

  goToRegister() {
    console.log('entre a register');
    this.navCtrl.navigateForward('/register');
  }
  

}