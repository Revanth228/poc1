import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddRoleComponent } from './add-role/add-role.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { AddDashboardComponent } from './add-dashboard/add-dashboard.component';
import { UpdateDashboardComponent } from './update-dashboard/update-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { TargetComponent } from './target/target.component';
import { UpdateUserComponent } from './update-user/update-user.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    AddRoleComponent,
    UpdateRoleComponent,
    AddDashboardComponent,
    UpdateDashboardComponent,
    RegisterComponent,
    TargetComponent,
    UpdateUserComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
      popoverTitle:'success'
    }),
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
