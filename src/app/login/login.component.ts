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

  constructor(private router: Router, private  commonService:CommonService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.authenticationForm= this.formBuilder.group({
name:['',Validators.required],
password:['',Validators.required]

    })
  }
onfun()
{
  // console.log(this.loginform.value.username) ;
  // let t:string = this.loginform.value.username;
  // if(t.startsWith("SRG"))
  // {
    
  //   this.router.navigate(['/admin']);

  // }
  // else if(t.startsWith("Walmart"))
  // {
  //   this.router.navigate(['/user']);
  // }
//   console.log(this.name);
//   if(this.name=="SRG-USER1" && this.password=="revanth1" || this.name=="SRG-USER2" && this.password=="revanth2" )
//   {
//     this.router.navigate(['/admin']);
//   }
//   else if(this.name=="Walmart-USER1" && this.password=="revanth1")
//   {
//     this.router.navigate(['/user']);
//   }
//   else if(this.name=="Target-User1" && this.password=="revanth1")
//   {
//     this.router.navigate(['/target']);
//   }
//   else
//   alert("incorrect logindetails !!!");

this.commonService.getAllUser2().subscribe((response)=>{
 // console.log(response[0])
 this.userDetails=response;
 let flag=false;
 for(let user of this.userDetails){
   if(user.name==this.authenticationForm.value.name && user.password== this.authenticationForm.value.password)
   {
    if(user.role=="SRG")
    {
      this.router.navigate(['/admin']);
      flag=true;
    }
    else if(user.role=="walmart")
    {
      this.router.navigate(['/user']);
      flag=true;
    }
    else if(user.role=="Target")
    {
      this.router.navigate(['/target']);
      flag=true;
    }
   }
 }
 console.log("falg value",flag);
 if(flag==false)
 {
  alert("In-correct details");
 }
})

}
}
