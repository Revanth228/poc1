import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myimage1:string="assets/images/1.png";
  myimage2:string="assets/images/3.jpg";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    this.router.navigate(['/login']);
  }
  onfun(nr)
  {
    if(document.getElementsByClassName("div3")){

      console.log("inside div3 condition")
    }
    document.getElementById("dp1").style.display = "none";
    document.getElementById("dp2").style.display = "none";
    document.getElementById("dp"+nr).style.display = "block";

  }
}
