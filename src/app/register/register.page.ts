import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validation_messages = {
    email:[
      {type: "required", message:'El Email es obligatorio.'},
      {type: "pattern", message:"El Email ingresado no es valido."}
    ],
    password:[
     {type: "minlength", message:'La contraseña es muy corta.'},
     {type: "required", message:'La contraseña es obligatorio.'}
    ],
    confirmation_password:[
      {type: "required", message:'La contraseña es obligatorio.'}
     ],
     name:[
      {type: "required", message:'el nombre de usuario es obligatorio.'}
     ],
     last_name:[
      {type: "required", message:'el apellido es obligatorio.'}
     ]
  }

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage
  ) { 
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      )
      , 
      password: new FormControl(
        "",
        Validators.compose([
          Validators.minLength(5),
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ])
      ),
      confirmation_password: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]')
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]')
        ])
      )
    })
    }

  ngOnInit() {
  }

  register(register_data: any){

  }

}
