import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  uri = '/register';

  constructor(private http: HttpClient) { }

  addUser(tn, un,tln,tlm,pass,cpass,ts) {
    const obj = {
      tn: tn,
      un: un,
      tln:tln,
      tlm:tlm,
      pass:pass,
      cpass:cpass,
      ts:ts
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  addBase(sll)
  {
    const obj={
      sll:sll
    };
    console.log(obj);
    console.log("object created");
    this.http.post(`${this.uri}/addbase`, obj)
        .subscribe(res => console.log('Done'));
  
  }

  addDesc(pt,pd,dd,tl,tm,usn) {
    const obj = {
      pt: pt,
      pd: pd,
      dd: dd,
      tl : tl,
      tm : tm,
      usn:usn
    };
    console.log(obj);
    console.log("object created");
    this.http.post(`${this.uri}/adddesc`, obj)
        .subscribe(res => console.log('Done'));
  }
  getUsers() {
    return this
           .http
           .get(`${this.uri}`);
  }

  getDesc() {
    return this
           .http
           .get(`${this.uri}/get`);
  }

  getDescription(usn) {
    console.log(usn);
    const obj = {
      usn: usn     
    };
    return this.http.post(`${this.uri}/user`, obj)
  }

  getBase() {
    return this
           .http
           .get(`${this.uri}/get2`);
  }
}
