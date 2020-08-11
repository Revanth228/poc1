import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  template:`
  <h1>Hello</h1>
  `
})
export class AdminComponent implements OnInit {
  myimage1:string="assets/images/1.png";
  myimage2:string="assets/images/3.jpg";
  popoverTitle = 'Delete';
  popoverMessage = 'Do you really want to delete this data';
  confirmClicked = false;
  cancelClicked = false;

  // headers = ["RoleName","ListName", "IsAdmin"];
  // rows = [
  //   {
  //     "RoleName" : "SRG",
  //     "ListName" : "-",
  //     "IsAdmin" : "yes"
  //   },
  //   {
  //     "RoleName" : "Walmarat Role Name",
  //     "ListName" : "walmart",
  //     "IsAdmin" : "No"
  //   },
  //   {
  //     "RoleName" : "Walmarat Insurance",
  //     "ListName" : "walmart-insurance",
  //     "IsAdmin" : "No"
  //   },
  //   {
  //     "RoleName" : "Target Role Name",
  //     "ListName" : "Target",
  //     "IsAdmin" : "No"
  //   },

  // ]
  headers1 = ["Role","ReportName", "Power BI Links"];
  rows1 = [
    {
      "Role" : "Walmart",
      "ReportName" : "Walmart Rtp1",
      "Power BI Links" : "Walmart Power BI Dashboard Links"
    },
    {
      "Role" : "Walmart",
      "ReportName" : "Walmart Rtp2",
      "Power BI Links" : "Walmart Power BI Dashboard Links"

    },
    {
      "Role" : "Target",
      "ReportName" : "Target Rtp1",
      "Power BI Links" : "Target Power BI Dashboard Links"
    },
    {
      "Role" : "Target",
      "ReportName" : "Target Rtp2",
      "Power BI Links" : "Target Power BI Dashboard Links"
    },
    {
      "Role" : "Walmart insurance",
      "ReportName" : "Walmart insurance Rtp1",
      "Power BI Links" : "Walmart Power BI Dashboard Links"
    },

  ]
  headers2 = ["Name","Password", "Role"];
  rows2 = [
    {
      "Name" : "SRG User2",
      "Password" : "Password",
      "Role" : "SRG"
    },
    {
      "Name" : "SRG User1",
      "Password" : "Password",
      "Role" : "SRG"
    },
    {
      "Name" : "Walmart User1",
      "Password" : "Password",
      "Role" : "Walmart"
    },
    {
      "Name" : "Walmart User2",
      "Password" : "Password",
      "Role" : "Walmart"
    },

  ]
  allUser: Object;
  allUser1: Object;

  constructor(private router: Router, private commonService:CommonService) { }

  ngOnInit(): void {
    this.getlatestuser();
    // this.getlatestuser1();
  }
  
 Onfunction(nr)
 {
  this.getlatestuser1();
     // let flag1 =true;
     // return true;
     if(document.getElementsByClassName("div3")){

       console.log("inside div3 condition")
     }
     document.getElementById("displaytable1").style.display = "none";
     document.getElementById("displaytable2").style.display = "none";
     document.getElementById("displaytable3").style.display = "none";
     document.getElementById("displaytable4").style.display = "none";
     document.getElementById("displaytable5").style.display = "none";
     document.getElementById("displaytable"+nr).style.display = "block";
     
  //    document.getElementById("myTable").addEventListener("click", function(button) {    
  //     if (document.getElementById("displaytable").style.display === "none") 		     document.getElementById("displaytable").style.display = "block";
  //     else document.getElementById("displaytable").style.display = "none";
  //  });
 
    
 }
 getlatestuser()
 {
   this.commonService.getAllUser().subscribe((response)=>{
     this.allUser=response
   });
 }
 getlatestuser1()
 {
   this.commonService.getAllUser1().subscribe((response)=>{
     this.allUser1=response
   });
 }
 logout()
 {
   this.router.navigate(['/login']);
 }
 onadd()
 {
   this.router.navigate(['/AddRole']);
 }
 deleteUser(user)
 {
  this.commonService.deleteUser(user).subscribe(()=>{
  this.getlatestuser();
  
  }
  )
}
deleteUser1(user)
 {
  this.commonService.deleteUser1(user).subscribe(()=>{
  this.getlatestuser1();
  
  }
  )
}
edituser(user){
  this.router.navigate(['/UpdateRole']);
}
 
}
