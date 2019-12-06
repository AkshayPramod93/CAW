import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//----------------------------------Services----------------------------------

import {RegisterService} from './register.service';
import {DescService} from './desc.service';

//---------------------------Material-----------------------------------------
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card'; 
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';


//----------------------------------------------------------------------------
import { TeamComponent } from './team/team.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import {BottomSheetOverviewExampleSheet} from './login/login.component';
import {BottomSheetOverviewExampleSheet2} from './login/login.component';
import {DialogOverviewExampleDialog} from './team/team.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
//import { CountdownModule } from 'ngx-countdown';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    BottomSheetOverviewExampleSheet,
    BottomSheetOverviewExampleSheet2,
    AboutComponent,
    DialogOverviewExampleDialog
  ],
  entryComponents: [
    BottomSheetOverviewExampleSheet,
    BottomSheetOverviewExampleSheet2,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSnackBarModule,
    MatGridListModule,
    MatDatepickerModule,
    MatBottomSheetModule,
    MatDividerModule, 
    MatChipsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatDialogModule
    
    //CountdownModule
  ],
  providers: [RegisterService,DescService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
