import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient,private router: Router) {

  }
  apiurl='http://localhost:3000/user';

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  Getall(){
    return this.http.get(this.apiurl);
  }
  updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }
  getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }

  GetAllCustomer(){
    return this.http.get('http://localhost:3000/customer');
  }
  
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  }
  //log out-->
    logout(): void {
    this.router.navigate(['/login']);
    localStorage.removeItem('currentUser');
    sessionStorage.clear()
     // Clear the session storage or any other necessary steps to log the user out.
  }
}










//   isloggedin() {
//     throw new Error('Method not implemented.');
//   }

//   // apiurl='src/data.json';

//   private apiUrl = 'http://localhost:3000/users';

//   constructor(private http: HttpClient) {}

//   login(username: string, password: string): Observable<any> {
//     const userData = { username, password };
//     return this.http.post<any>(this.apiUrl, userData);
//   }

//   isLoggedIn(): boolean {
//     const currentUser = localStorage.getItem('currentUser');
//     return !!currentUser; // Returns true if currentUser is not null or undefined
//   }

//   logout(): void {
//     localStorage.removeItem('currentUser');
//   }
// }







