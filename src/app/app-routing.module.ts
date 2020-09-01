import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { AddDashboardComponent } from './add-dashboard/add-dashboard.component';
import { UpdateDashboardComponent } from './update-dashboard/update-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { TargetComponent } from './target/target.component';
import { UpdateUserComponent } from './update-user/update-user.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin/:id/:user',component:AdminComponent},
  {path:'user/:id',component:UserComponent},
  {path:'login',component:LoginComponent},
  {path:'AddRole/:user',component:AddRoleComponent},
  {path:'UpdateRole/:id/:user',component:UpdateRoleComponent},
  {path:'AddDashboard/:user',component:AddDashboardComponent},
  {path:'UpdateDashboard/:id/:user',component:UpdateDashboardComponent},
  {path:'register/:user',component:RegisterComponent},
  {path:'UpdateUser/:id/:user',component:UpdateUserComponent},
  {path:'target',component:TargetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
