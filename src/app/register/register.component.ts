import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {RegisterService} from '../register.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }


  constructor(private rs: RegisterService,private router: Router,private snackBar: MatSnackBar) { }
  openSnackBar(me: string, action: string) 
  {
   this.snackBar.open(me, action, {
     duration: 3000,
     panelClass: ['green-snackbar']
   });
 }
 openSnackBar1(me: string, action: string) 
  {
   this.snackBar.open(me, action, {
     duration: 3000,
     panelClass: ['red-snackbar']
   });
 }

  addUser(tn,un,tln,tlm,pass,cpass,ts) {
    if(tn == '' || un == '' || tln == '' || tlm == '' || pass == '' || cpass == '')
    {
      this.openSnackBar1("Input fields cannot be blank","Error!");
    }
    else if(pass != cpass )
    {
      this.openSnackBar1("Password Mismatch","");
    }
    else
    {
    this.rs.addUser(tn,un,tln,tlm,pass,cpass,ts);
    this.openSnackBar("Registered!","Success!");
    setTimeout(() => {
      this.router.navigate(["/login"])
    }, 1000);
  }
}

  ngOnInit() {
  }

  // postMethod(files: FileList) {

  //   this.fileToUpload = files.item(0); 
    
    
  //   let formData = new FormData(); 
    
  //   formData.append(‘file’, this.fileToUpload, this.fileToUpload.name); 
    
  //   this.http.post(“Your end-point URL”, formData).subscribe((val) => {
    
  //   console.log(val);
  //   });
  //   return false; 
    
  //   }
}
