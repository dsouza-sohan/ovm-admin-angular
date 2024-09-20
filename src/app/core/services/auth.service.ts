import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //Get LocalStorage user details function
  getUserDetails() {
    //Gets the details of the current logged in user from localStorage
    let userDetails = JSON.parse(localStorage.getItem('currentUser')  || '{}')
    return userDetails;
  }

  //set the logged in user details to localstorage
  setUserDetails(userDetails:any) {
    localStorage.setItem('currentUser', JSON.stringify(userDetails))
  }
}
