import { Component, OnInit } from '@angular/core';
import {CommonService} from '../service/common.service';
import { Router,ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  isEdit=false;
  
  
  date = new Date().toLocaleString();
userObj:any;
  allUser: object;
  allUser2;
  
   
//  datetime = "Last Sync: " + this.date.getDay() + "/" + this.date.getMonth() 
// + "/" + this.date.getFullYear() + " @ " 
// + this.date.getHours() + ":" 
// + this.getMinutes() + ":" + this.getSeconds();
  
  constructor(private commonService:CommonService,private router: Router,private act_router:ActivatedRoute ) { }
  allUser4:string;
  ngOnInit(): void {
    this.getlatestuser();
    this.getlatestuser2();
    console.log("user-name:",this.allUser4)
    this.userObj={
 
      roleName:'',
      listName:'',
     isAdmin:'no',
      // password:'',
      id:'',
      isActive:'yes',
      createdBy:this.allUser4,
      Timestamp:this.date,
      modifiedBy:'',
      modifiedOn:'',
      
    }
  }
 
  createRole(myform)
  {
    console.log(myform);
    this.commonService.createUser(myform).subscribe((response)=>{
      this.getlatestuser();
      alert("Data added Succesfully!!!")
      this.router.navigate(['/admin']);
    })

  }
  getlatestuser()
{
  this.commonService.getAllUser().subscribe((response)=>{
    this.allUser=response
  });
}
getlatestuser2()
{
  console.log("callingsajfsaf..");
  // this.allUser2=this.act_router.snapshot.paramMap.get('id');
  console.log('helo this is id',this.allUser2)
 
  this.allUser4=this.act_router.snapshot.paramMap.get('user');
  console.log('helo this is user',this.allUser4)
  // this.commonService.getAllUser2().subscribe((response)=>{
  //   this.allUser2=response
  
  // });

}
}
