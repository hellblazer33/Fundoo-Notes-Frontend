import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http';  //
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem("token")
  }

  userRegister(data: any) {
    let header = {
      headers: new HttpHeaders({    //
        'Content-Type': 'application/json'  //request and response are in the format of json means key-value pair
      })
    }
    return this.httpService.postService('user/register', data, false, header)
  }

  userSignin(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('user/login', data, false, header)
  }

  userforgotemail(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('user/forgotemail', data, false, header)
  }
  encode(data: any) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  // userforgotpassword( data:any){


  //   let header={
  //     headers:new HttpHeaders({
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Authorization':this.token
  //     })
  //   }

  //     return  this.httpService.postService('user/reset-password' , this.encode(data), true, header )


  // }
  forgotpassword(payload: any, token: any) {
    console.log("user password ======token", token);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': token
      })
    }
    return this.httpService.postService("user/resetpassword", this.encode(payload), true, header)
  }
}
