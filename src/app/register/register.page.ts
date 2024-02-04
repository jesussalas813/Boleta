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
     {type: "minlength", message:'La contraseña debe tener minimo 8 caracteres.'},
     {type: "required", message:'La contraseña es obligatorio.'}
    ],
    confirmation_password:[
      {type: "noCoincide", message: 'Las contraseñas no coinciden.'}
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
          Validators.minLength(8),
          Validators.required,
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
    },{
        validator: this.confirm_pass('password', 'confirmation_password')
    })
    }

    confirm_pass(passwordControlname: string, confirmation_passwordControlname: string){
      return(formGroup: FormGroup) =>{
        const passwordControl = formGroup.controls[passwordControlname];
        const confirmation_passwordControl = formGroup.controls[confirmation_passwordControlname];
        
        if (passwordControl.value !== confirmation_passwordControl.value) {
          confirmation_passwordControl.setErrors({ noCoincide: true });
        } else {
          confirmation_passwordControl.setErrors(null);
        }
      }

    }

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login")
  }

  register(register_data: any){

  }

}
