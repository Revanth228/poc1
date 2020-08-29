import { Component, OnInit } from '@angular/core';
import {CommonService} from '../service/common.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-dashboard',
  templateUrl: './add-dashboard.component.html',
  styleUrls: ['./add-dashboard.component.css']
})
export class AddDashboardComponent implements OnInit{
  isEdit=false;
  // userObj={
  //   role:'',
  //   reportName:'',
  //  pwb:'',
  //   // password:'',
  //   id:''
  // }
  createDash=new FormGroup({
    role:new FormControl(''),
    reportName:new FormControl(''),
   pwb:new FormControl(''),
    // password:'',
    id:new FormControl('')
  })
  allUser: object;
  allUser1:object;
  constructor(private commonService:CommonService,private router: Router,private routers: ActivatedRoute) { }

  ngOnInit(): void {
    this.getlatestuser1();
    this.getlatestuser();
  }
  createRole()
  {
    console.log(this.createDash.value);
    this.commonService.createUser1(this.createDash.value).subscribe((response)=>{
      this.getlatestuser1();
      console.log(response)
      alert("Data added Succesfully!!!")
      this.router.navigate(['/admin']);
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

}

