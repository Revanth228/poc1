import { Component, OnInit } from '@angular/core';
import {CommonService} from '../service/common.service';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-update-dashboard',
  templateUrl: './update-dashboard.component.html',
  styleUrls: ['./update-dashboard.component.css']
})
export class UpdateDashboardComponent implements OnInit{
  allUser4;
  date=new Date().toLocaleString();
 //userObj;
 userObj=new FormGroup({
  role:new FormControl(''),
  reportName:new FormControl(''),
 pwb:new FormControl(''),
  // password:'',
  id:new FormControl(''),
  isActive:new FormControl(''),
  createdBy:new FormControl(''),
  Timestamp:new FormControl(''),
  ModifiedBy: new FormControl(this.allUser4),
  ModifiedOn:new FormControl(this.date)
})
  allUser: object;
  constructor(private commonService:CommonService,private router: ActivatedRoute,private router1:Router ) { }

  ngOnInit(): void {
    this.test();
    this.getlatestuser();
   
    console.log(this.router.snapshot.params.id)
    this.commonService.getCurrentData1(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result)
     this.userObj=new FormGroup({
      role:new FormControl(result['role']),
      reportName:new FormControl(result['reportName']),
       pwb:new FormControl(result['pwb']),
        id:new FormControl(result['id']),
        isActive:new FormControl(result['isActive']),
        createdBy:new FormControl(result['createdBy']),
        Timestamp:new FormControl(result['Timestamp']),
        ModifiedBy:new FormControl(this.allUser4),
        ModifiedOn:new FormControl(this.date)
      })
    })
  }
  updateDash()
  {
    this.commonService.updateUser1(this.router.snapshot.params.id,this.userObj.value).subscribe((result)=>{
      console.log(result,"data updated succesfully");
    })
    alert("updated succesfully");
    this.userObj.reset({});
    this.router1.navigate(["/admin/SRG/"+this.allUser4]);

  }

getlatestuser()
{
  this.commonService.getAllUser().subscribe((response)=>{
    this.allUser=response
  });
}
test()
{
  this.allUser4=this.router.snapshot.paramMap.get('user');
}

}