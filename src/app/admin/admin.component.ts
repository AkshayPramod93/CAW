import { Component, OnInit } from '@angular/core';
import Desc from '../desc';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  desc: Desc[];

  constructor(private ds:RegisterService,private router: Router) { }

  ngOnInit() {
    this.ds
    .getDesc()  
    .subscribe((data: Desc[]) => {
      this.desc = data;
      console.log(this.desc);
  
  });
}
logout()
{
  sessionStorage.setItem('x-auth','');
  this.router.navigate( ["/login"] );
}

}
