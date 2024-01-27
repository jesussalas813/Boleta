import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loginUser(credential: any){
    return new Promise((accept, reject) => {
      if(
        credential.email == 'jesus@gmail.com' 
        && credential.password == '1234'
      ){
        accept('Login correcto');
      }else{
        reject('Login incorrecto');
      }
    })  
  }
}
