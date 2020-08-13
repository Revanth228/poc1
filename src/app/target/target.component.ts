import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {
  myimage1:string="assets/images/4.jpg";
  myimage2:string="assets/images/5.jpg";

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
