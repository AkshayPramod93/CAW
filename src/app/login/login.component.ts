import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import Register from '../register';
import Base from '../../base';
import {RegisterService} from '../register.service';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  showActions: boolean = false;  
  showlog:boolean = true;
  log:boolean=false;
  seclog:boolean=false;
  admlog:boolean=false;
 
  base:String;
  rt:String;
  rs:String;
  uname:String;
  slog:String;
  pas:String;
  secure:String;
  adminl:String;
  creds: Register[];
  creds2: Base[];

  nlog()
  {
    this.log=true;
    this.seclog=false;
    this.admlog=false;
  }

  selog()
{
    this.seclog=true;
    this.log=false;
    this.admlog=false;
  }

  adlog()
  {
    this.admlog=true;
    this.seclog=false;
    this.log=false;

  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  

  constructor(private sas:RegisterService ,private snackBar: MatSnackBar,private router: Router,private bottomSheet: MatBottomSheet) { }
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
  openBottomSheet2(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet2);
  }

  ngOnInit() {
    this.sas
    .getUsers()
    .subscribe((data: Register[]) => {
      this.creds = data;
  });
  //-----------------------------------------------------------------------------------------------
  this.sas.getBase().subscribe((bdata:Base[])=>{
    this.creds2 = bdata;
  });
  }
  openSnackBar(me: string, action: string) 
  {
   this.snackBar.open(me, action, {
     duration: 5000,
   });
 }
  openSnackBar1(me: string, action: string) 
  {
   this.snackBar.open(me, action, {
     duration: 3000,
     panelClass: ['green-snackbar']
   });
 }

 openSnackBar2(me: string, action: string) 
 {
  this.snackBar.open(me, action, {
    duration: 3000,
    panelClass: ['blue-snackbar']
  });
}
openSnackBar3(me: string, action: string) 
{
 this.snackBar.open(me, action, {
   duration: 3000,
   panelClass: ['red-snackbar']
 });
}
  valid(una:string,passw:string)
  {
   this.uname=una;
   this.pas=passw;
   for (let p of this.creds) {
     if(this.uname===p.un && this.pas===p.pass)
     {
       console.log("valid");
       this.uname=p.un;
      this.showActions=true;
      this.showlog=false;
      this.openSnackBar1("Logged in!","Success !");
      this.router.navigate(["/pdtcd"])
      localStorage.setItem('user',this.uname.toString());
      sessionStorage.setItem('x-auth',this.uname.toString()) 
      break;
     }
     else if(this.uname == '' || this.pas == '')
     {
       this.openSnackBar2("Input fields cannot be blank","");

     }
    
     else{
       console.log("invalid");
       this.showActions=false;
       this.showlog=true;
       this.openSnackBar3("Invalid Credentials","Try again");
       
     }
 }
  }

  valid2(sl:string)
  {
   this.slog=sl;
   for (let p of this.creds) {
     if(this.slog===p.un)
     {
       console.log("valid");
       this.slog=p.un;
       this.openSnackBar("Generating Base64 credentials","");
       this.rt=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
       console.log(this.rt);
       this.rs=this.rt+sl;
       console.log(this.rs);
       this.base=btoa(this.rs.toString());
       this.sas.addBase(this.base);
       console.log(this.base);
      break;
     }
     else if(this.slog == '')
     {
       this.openSnackBar2("Input fields cannot be blank","");
     }
     else{
       console.log("invalid");
       this.showActions=false;
       this.showlog=true;
       this.openSnackBar3("Username not found","Try again");
       
     }
 }
  }

  valid3(sll:string)
  {
    this.secure = sll;
    for (let p of this.creds2) 
    {
      if(this.secure === p.sll)
      {
      sessionStorage.setItem('x-auth',this.secure.toString()) 
      this.openSnackBar3("Success","Logged in");
      this.router.navigate(["/pdtcd"])
      }
      else
      {
        this.openSnackBar3("Not found","Try again");
      }

  }
}
valid4(admin:string)
{
  this.adminl = admin;
  sessionStorage.setItem('x-auth',this.adminl.toString()) 
    if(this.adminl === 'ravimw')
    {
    // sessionStorage.setItem('x-auth',this.secure.toString()) 
    this.openSnackBar3("Success","Logged in");
    this.router.navigate(["/pdadmincl"])
    }
    else
    {
      this.openSnackBar3("Admin Not Found","");
    }


}

}


//-------------------------------Bottom Sheet-------------------------------------

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}


//-------------------------------Bottom Sheet2-------------------------------------

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet2.html',
})
export class BottomSheetOverviewExampleSheet2 {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet2>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}