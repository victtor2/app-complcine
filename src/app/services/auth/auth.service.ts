import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  loginWithEmail(email: string, password: string){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle(){
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  logout(){
    return signOut(this.auth);
  }
}
