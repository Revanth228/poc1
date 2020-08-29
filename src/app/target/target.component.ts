import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {
  myimage1:string="assets/images/4.jpg";
  myimage2:string="assets/images/5.jpg";

  constructor(private router: Router,private commonService:CommonService) { }
  allUser: Object;
  allUser1: Object;
 allUser2:object;
  ngOnInit(): void {
    this.getlatestuser1();
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
  getlatestuser1()
  {
    console.log("callingsajfsaf..");
    this.commonService.getAllUser1().subscribe((response)=>{
      this.allUser2=response
    
    });
  
  }
}
