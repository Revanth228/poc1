import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { ReadVarExpr } from '@angular/compiler';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  template:`
  <h1>Hello</h1>
  `
})
export class AdminComponent implements OnInit {
  url: SafeResourceUrl;
  myimage1:string="assets/images/1.png";
  myimage2:string="assets/images/3.jpg";
  myimage3:string="assets/images/4.jpg";
  myimage4:string="assets/images/5.jpg";
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
  table1=false;
  table2=false;
  table3=false;
  allUser: Object;
  allUser1: Object;
 allUser2:object;
  constructor(private router: Router, private commonService:CommonService,sanitizer: DomSanitizer) {this.url = sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/'); }
  
  ngOnInit(): void {
     this.getlatestuser();
    
    //  this.getlatestuser1();
  }
  
 Onfunction(nr)
 {
  // this.getlatestuser()
  this.getlatestuser1();
  this.getlatestuser2();
  if(nr==1){
    this.table1=true;
    this.table2=false;
    this.table3=false;
  }else if(nr==2){
    this.table1=false;
    this.table2=true;
    this.table3=false;
  }else{
    this.table1=false;
    this.table2=false;
    this.table3=true;
  }
    
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
//  deleteUser(user)
//  {
//   this.commonService.deleteUser(user).subscribe(()=>{
//   this.getlatestuser();
  
//   }
//   )
// }


deleteUser1(user)
 {
  this.commonService.deleteUser1(user).subscribe(()=>{
  this.getlatestuser1();
  
  }
  )
}
deleteUser2(user)
 {
  this.commonService.deleteUser2(user).subscribe(()=>{
  this.getlatestuser2();
  
  }
  )
}
edituser(user){
  this.router.navigate(['/UpdateRole']);
}
getlatestuser2()
{
  console.log("callingsajfsaf..");
  this.commonService.getAllUser2().subscribe((response)=>{
    this.allUser2=response
  
  });

}
test(user)
{
  let dumy:any = user;
  const role = user.RoleName;
  console.log("user:: ", user);
  console.log("dumy" ,dumy.Rolename)
  //console.log("rolename:: ", user[0].Rolename);
  this.getlatestuser2()
  //var data = []
 console.log("calling..");
 this.commonService.getAllUser2().subscribe((response)=>{
  this.allUser2=response
  console.log("this.allUser2..", this.allUser2);
  console.log("roleinside::", role);
 console.log(this.allUser2[3].role);
 let x:any=[];
 let flag = false;
 x=this.allUser2;
 console.log(Object.keys(x).length);
 for(let i=0; i<Object.keys(x).length; i++)
 {
  
  if(dumy.Rolename == this.allUser2[i].role)
  {

  
  
  }
  //  else if(dumy.Rolename == this.allUser2[i].role){
  //   alert("cannot delete the role since the user is already exists!!");
  //   break;
  // }
 
 }
 for(let i=0; i<Object.keys(x).length; i++)
 {
   if(dumy.Rolename == this.allUser2[i].role)
   {
  // this.commonService.deleteUser(dumy).subscribe(()=>{
  //     this.getlatestuser(); 
       alert("cannot delete the role since the user is already exists!!")
       flag= true;
         //  }
       //  ) 
   }
   
 }
 console.log("flag value" , flag)
if(flag==false){
  this.commonService.deleteUser(user).subscribe(()=>{
    this.getlatestuser();
    
    }
    )

}
 
});

}
}
