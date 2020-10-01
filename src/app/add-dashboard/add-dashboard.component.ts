import { Component, OnInit } from '@angular/core';
import {CommonService} from '../service/common.service';
import { FormGroup, FormControl ,FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-dashboard',
  templateUrl: './add-dashboard.component.html',
  styleUrls: ['./add-dashboard.component.css']
})
export class AddDashboardComponent implements OnInit{
  date=new Date().toLocaleString();
  allUser4: any;
 submitted:boolean=false;
  isEdit=false;
 createDash;
 userDetails;
  allUser: object;
  allUser1:object;
  constructor(private commonService:CommonService,private router: Router,private routers: ActivatedRoute,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.test();
    this.getlatestuser1();
    this.getlatestuser();
    this.createDash=new FormGroup({
      role:new FormControl('', Validators.required),
      reportName:new FormControl('',Validators.required),
     pwb:new FormControl('',Validators.required),
      // password:'',
      id:new FormControl(''),
      isActive:new FormControl('no'),
      createdBy:new FormControl(this.allUser4),
      Timestamp:new FormControl(this.date),
      ModifiedBy: new FormControl(this.allUser4),
      ModifiedOn:new FormControl(this.date)
      
    })
  }
  createRole()
  {

    this.submitted=true;
    console.log(this.createDash.value);
    this.getlatestuser1();
    if(this.createDash.invalid)
    {
      alert("please fill the mandatory details");
      return;
    }
    this.commonService.getAllUser1().subscribe((response)=>{
this.userDetails=response;
let flag=false;
for(let user of this.userDetails)
{
  if(user.reportName == this.createDash.value.reportName)
  {
    alert("Report name  already exist!")
    flag=true;
  }
}
if(flag== false)
{
  this.commonService.createUser1(this.createDash.value).subscribe((response)=>{
    this.getlatestuser1();
    console.log(response)
    alert("Data added Succesfully!!!")
    this.test();
    this.router.navigate(["/admin/SRG/"+this.allUser4]);
  })
}
   
    })
  

  }
  getlatestuser1()
{
  this.commonService.getAllUser1().subscribe((response)=>{
    this.allUser=response
  });
}
getlatestuser()
{
  this.commonService.getAllUser().subscribe((response)=>{
    this.allUser1=response
  });
}
test()
{
  // this.allUser3=this.router.snapshot.paramMap.get('id');
         this.allUser4=this.routers.snapshot.paramMap.get('user');
}
}

