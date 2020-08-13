import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router'
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
  name:string;
  password:any;
  

  constructor(private router: Router) { }

  ngOnInit(): void {
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
  console.log(this.name);
  if(this.name=="SRG-USER1" && this.password=="revanth1")
  {
    this.router.navigate(['/admin']);
  }
  else if(this.name=="Walmart-USER1" && this.password=="revanth1")
  {
    this.router.navigate(['/user']);
  }
  else if(this.name=="Target-User1" && this.password=="revanth1")
  {
    this.router.navigate(['/target']);
  }
  else
  alert("incorrect logindetails !!!");
}
}
