import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';


@Injectable({
  providedIn: 'root'
})
export class LabelService {

  token: any;

  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem('token')
  }

  addLabel(reqdata: any) {
    console.log(reqdata);

    let headeroptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.postService('Label/Add?labelName=' + reqdata.labelName + '&notesId=' + reqdata.notesId, reqdata, true, headeroptions)
  }



  updateLabel(reqdata: any) {
    console.log(reqdata);

    let headeroptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.putService('Label/Update?labelName=' + reqdata.labelName + '&newlabelName=' + reqdata.newlabelName, reqdata, true, headeroptions)
  }

  deleteLabel(labelId: any) {
    let headeroptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.deleteService('Label/Remove?labelId=' + labelId, true, headeroptions)
  }




  getlabelById(labelId: number) {
    let headeroptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.getService('Label/GetLabel?labelId=' + labelId, true, headeroptions)
  }

  getallLabels() {
    let headeroptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.getService('Label/redisLabel', true, headeroptions);
  }


}