import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform=new FormGroup(
    {
      username:new FormControl(''),
      password:new FormControl('')
    }
  );

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
onfun()
{
  console.log(this.loginform.value.username) ;
  let t:string = this.loginform.value.username;
  if(t.startsWith("SRG"))
  {
    
    this.router.navigate(['/admin']);

  }
  else if(t.startsWith("Walmart"))
  {
    this.router.navigate(['/user']);
  }
}
}
