import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'
import { CommonService } from '../service/common.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myimage1:string="assets/images/1.png";
  myimage2:string="assets/images/3.jpg";

  constructor(private router: Router, private act_router:ActivatedRoute,private commonService:CommonService) { }
  allUser: Object;
  allUser1: Object;
 allUser2;
  ngOnInit(): void {
    this.getlatestuser1();
    this.getlatestuser2();
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
    this.allUser1=response
  
  });

}
getlatestuser2()
{
  console.log("callingsajfsaf..");
  this.allUser2=this.act_router.snapshot.paramMap.get('id');
  // this.commonService.getAllUser2().subscribe((response)=>{
  //   this.allUser2=response
  
  // });

}
}
