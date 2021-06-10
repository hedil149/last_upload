import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  private _registerUrl = `${environment.api_url}/auth/register`;
  private _loginUrl=`${environment.api_url}/auth/login`;
  private _logoutUrl= `${environment.api_url}/home`;
  //private _loginwithgoogleUrl= ;
  //private  _loginwithfacebookUrl=  ;
  constructor(private http: HttpClient) { }
 registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user)

  }


loginUser(user: any){
  return this.http.post<any>(this._loginUrl, user)
}
logout( user: any) {
  return this.http.post<any>(this._logoutUrl, user)

}


}
