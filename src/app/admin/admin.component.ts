import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
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
  url;
  p:number=1;
  myimage1:string="assets/images/1.png";
  myimage2:string="assets/images/3.jpg";
  myimage3:string="assets/images/4.jpg";
  myimage4:string="assets/images/5.jpg";
  popoverTitle = 'Delete';
  popoverMessage = 'Do you really want to delete this data';
  confirmClicked = false;
  cancelClicked = false;

 
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
  table1=true;
  table2=false;
  table3=false;
  table4=false;
  table5=false;
  history_table1=false;
  history_table2=false;
  history_table3=false;

  allUser: Object;
  allUser1: Object;
 allUser2:object;
  allUser3;
  allUser4: any;
  constructor(private router: Router, private commonService:CommonService,private sanitizer: DomSanitizer,private act_router:ActivatedRoute)
   {
     this.url = sanitizer.bypassSecurityTrustResourceUrl('https://stock.walmart.com/investors/financial-information/annual-reports-and-proxies/default.aspx'); 
  }
  
  ngOnInit(): void {
     this.getlatestuser();
    this.getlatestuser2a();
    //  this.getlatestuser1();
  }
  Onfunction1 (nr)
  {
if(nr==1)
{
this.history_table1=true;
this.history_table2=false;
this.history_table3=false;
}
else if(nr==2)
{
this.history_table1=false;
this.history_table2=true;
this.history_table3=false;
}
else
{
  this.history_table1=false;
  this.history_table2=false;
  this.history_table3=true;
}
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
    this. table4=false;
    this.table5=false;
  }else if(nr==2){

    this.table1=false;
    this.table2=true;
    this.table3=false;
    this. table4=false;
    this.table5=false;

  }else if(nr==3){
    this.table1=false;
    this.table2=false;
    this.table3=true;
    this. table4=false;
    this.table5=false;
  }
  else if(nr==4)
  {
    this.table1=false;
    this. table2=false;
    this. table3=false;
    this. table4=true;
    this.table5=false;
  }
  else
  {
    this.table1=false;
    this. table2=false;
    this. table3=false;
    this. table4=false;
    this.table5=true;
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
getlatestuser2a()
{
  console.log("callingsajfsaf..");
  this.allUser3=this.act_router.snapshot.paramMap.get('id');
  this.allUser4=this.act_router.snapshot.paramMap.get('user');
  // this.commonService.getAllUser2().subscribe((response)=>{
  //   this.allUser2=response
  
  // });

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
//  for(let i=0; i<Object.keys(x).length; i++)
//  {
  
//   // if(dumy.Rolename == this.allUser2[i].role)
//   // {

  
  
//   // }
//   //  else if(dumy.Rolename == this.allUser2[i].role){
//   //   alert("cannot delete the role since the user is already exists!!");
//   //   break;
//   // }
 
//  }
 for(let i=0; i<Object.keys(x).length; i++)
 {
   if(dumy.Rolename == this.allUser2[i].role)
   {
  // this.commonService.deleteUser(dumy).subscribe(()=>{
  //     this.getlatestuser(); 
       alert("cannot delete the role since the user is already exists!!")
       flag= true;
       break;
         //  }
       //  ) 
   }
   
 }
 console.log("flag value" , flag)
if(flag==false)
{
   this.commonService.deleteUser(user).subscribe(()=>{
   this.getlatestuser();
    
     }
    )

}
 
});

}
}
