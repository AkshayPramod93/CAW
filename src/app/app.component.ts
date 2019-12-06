import { Component,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class AppComponent {
  title = 'ProjectDash';
  show:boolean=true;
  show2:boolean=true;
  logbut:boolean=true;
  showstat:boolean=false;
  ngOnInit() {
  if(sessionStorage.getItem('x-auth')!='')
  {
  this.showstat=true;
  }
  else{
    this.showstat=false;
  }
  }

  logclick()
{
  this.logbut=false;
  
}
  // checkl()
  // {
  //   if(localStorage.getItem('user')=='')
  //   {
  //   this.show=true;
  //   this.show2=false;
  //   }
  //   else
  //   {
  //     this.show=false;
  //   }
  // }

  // checkr()
  // {
  //   if(localStorage.getItem('user')=='')
  //   {
  //   this.show2=true;
  //   }
  //   else
  //   {
  //     this.show2=false;
  //   }
  // }
  
}
