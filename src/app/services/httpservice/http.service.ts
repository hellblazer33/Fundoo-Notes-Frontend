import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl = environment.baseurl
  constructor( private http :HttpClient) { }

  postService(url:any, data:any, token:boolean=false, httpOptions:any){   // here data:any is used in context of whatever data we are sending to backend through post operation
   console.log(data)
   return this.http.post(this.baseurl+url, data, token && httpOptions)
  }

  
   putService(url:any,data:any,token:boolean=false, httpOptions:any){   // here data:any is used in context of whatever data we are sending to backend through post operation
    
    return this.http.put(this.baseurl+url,data,token && httpOptions)
   }
  
   getService(url:any,token:boolean=false,httpOptions:any){
    
    return this.http.get(this.baseurl+url,token && httpOptions)
   }
}
