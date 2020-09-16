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
  latitude =17.3850;
  longitude = 78.4867;
  url;
  p:number=1;
  popoverTitle = 'Delete';
  popoverMessage = 'Do you really want to delete this data';
  confirmClicked = false;
  cancelClicked = false;

 
  
  table1=true;
  table2=false;
  table3=false;
  table4=false;
  table5=false;
  table6=false;
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
  
 Onfunction(nr)  //function for displaying the tables while clicking on button
 {
 
  this.getlatestuser1();
  this.getlatestuser2();
  if(nr==1){
    this.table1=true;
    this.table2=false;
    this.table3=false;
    this. table4=false;
    this.table5=false;
    this.table6=false;
  }else if(nr==2){

    this.table1=false;
    this.table2=true;
    this.table3=false;
    this. table4=false;
    this.table5=false;
    this.table6=false;

  }else if(nr==3){
    this.table1=false;
    this.table2=false;
    this.table3=true;
    this. table4=false;
    this.table5=false;
    this.table6=false;
  }
  else if(nr==4)
  {
    this.table1=false;
    this. table2=false;
    this. table3=false;
    this. table4=true;
    this.table5=false;
    this.table6=false;
  }
  else if(nr==5)
  {
    this.table1=false;
    this. table2=false;
    this. table3=false;
    this. table4=false;
    this.table5=true;
    this.table6=false;
  }
 else
 {
  this.table1=false;
  this. table2=false;
  this. table3=false;
  this. table4=false;
  this.table5=false;
  this.table6=true;
 }
    
 }
 getlatestuser()  //getting the roles table details from the json server
 {
   this.commonService.getAllUser().subscribe((response)=>{
     this.allUser=response
   });
 }
 getlatestuser1() //getting the dashboard details from json server
 {
   this.commonService.getAllUser1().subscribe((response)=>{
     this.allUser1=response
   });
 }
 logout()
 {
   this.router.navigate(['/login']);
 }

deleteUser1(user) //deleting the selected row from the dashboard table
 {
  this.commonService.deleteUser1(user).subscribe(()=>{
  this.getlatestuser1();
  
  }
  )
}
deleteUser2(user) //deleting the selected row from the Users table
 {
  this.commonService.deleteUser2(user).subscribe(()=>{
  this.getlatestuser2();
  
  }
  )
}
edituser(user){   //while clicking on edit it will redirect to update-role screen
  this.router.navigate(['/UpdateRole']);
}
getlatestuser2() //getting the data from the user table
{
  console.log("callingsajfsaf..");
  this.commonService.getAllUser2().subscribe((response)=>{
    this.allUser2=response
  
  });

}
getlatestuser2a()  //this is used for getting the 'username' and 'id' from the user-table 
{
  console.log("callingsajfsaf..");
  this.allUser3=this.act_router.snapshot.paramMap.get('id');
  this.allUser4=this.act_router.snapshot.paramMap.get('user');
  
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
 
       alert("cannot delete the role since the user is already exists!!")
       flag= true;
       break;
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
