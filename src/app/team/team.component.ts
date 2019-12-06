import { Component, OnInit,ViewEncapsulation,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RegisterService } from '../register.service';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
import Desc from '../desc';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class TeamComponent implements OnInit {

  
  desc: Desc[];
  s:any;
  showproj:boolean=false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,private ds:RegisterService,private snackBar: MatSnackBar,private router: Router,public dialog: MatDialog) {}
  openSnackBar(me: string, action: string) 
  {
   this.snackBar.open(me, action, {
     duration: 3000,
     panelClass: ['green-snackbar']
   });
 }
 addDesc(pt,pd,dd,tl,tm,usn)
  {
    this.ds.addDesc(pt,pd,dd,tl,tm,usn);
    localStorage.setItem('usn',usn)
    console.log("Inside TS function");
    this.openSnackBar("Project Added!","Success!");
  }

  ngOnInit() {
    this.ds
    .getDescription(localStorage.getItem("user"))  
    .subscribe((data: Desc[]) => {
      this.desc = data;
      console.log(this.desc);
  
  });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });

    
  


  }

 
  logout()
  {
    sessionStorage.setItem('x-auth','');
    this.router.navigate( ["/login"] );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: 'auto',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}