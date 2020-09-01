import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router'
import { CommonService } from '../service/common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginform=new FormGroup(
  //   {
  //     username:new FormControl(''),
  //     password:new FormControl('')
  //   }
  // );
  // name:string;
  // password:any;
  authenticationForm:FormGroup;
  userDetails;
  dashBoard;

  constructor(private router: Router, private  commonService:CommonService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.authenticationForm= this.formBuilder.group({
name:['',Validators.required],
password:['',Validators.required]

    })
  }
onfun()
{
 

this.commonService.getAllUser2().subscribe((response)=>{

 this.userDetails=response;
 let flag=false;
 
 for(let user of this.userDetails){
   if(user.name==this.authenticationForm.value.name && user.password== this.authenticationForm.value.password)
   {
console.log('hai');
if(user.role=="SRG")
 {
   this.router.navigate(['/admin',user.role,user.name]);
   flag=true;
 }
 else
 {
    this.router.navigate(['/user',user.role])
    flag=true;
 }
    // if(user.role=="SRG")
    // {
    //   this.router.navigate(['/admin']);
    //   flag=true;
    // }
    // else if(user.role=="walmart")
    // {
    //   this.router.navigate(['/user']);
    //   flag=true;
    // }
    // else if(user.role=="Target")
    // {
    //   this.router.navigate(['/target']);
    //   flag=true;
    // }
   }
 }
 console.log("falg value",flag);
 if(flag==false)
 {
  alert("In-correct details");
 }
})
//})
}
}
