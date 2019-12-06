
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DescService {

  uri = 'http://localhost:4000/register';

  constructor(private http: HttpClient) { }

  addDesc(pt,pd,dd,tl,tm) {
    const obj = {
      ptitle: pt,
      pdesc: pd,
      ddate: dd,
      tech : tl,
      team : tm
    };
    console.log(obj);
    console.log("object created");
    this.http.post(`${this.uri}/adddesc`, obj)
        .subscribe(res => console.log('Done'));
  }
}