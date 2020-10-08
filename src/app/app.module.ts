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
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';
import { ExcelService } from './service/ExcelService';
import { NotificationComponent } from './notification/notification.component';
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
    UpdateUserComponent,
    NotificationComponent
    
    
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
  Ng2SearchPipeModule,
  NgxPaginationModule,
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCWUD2mW2uQN2ft8W43WlaDnJQu39dAWUk'
  })
    
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
