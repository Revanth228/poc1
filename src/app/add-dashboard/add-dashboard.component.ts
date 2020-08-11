import { Component, OnInit } from '@angular/core';
import {CommonService} from '../service/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-dashboard',
  templateUrl: './add-dashboard.component.html',
  styleUrls: ['./add-dashboard.component.css']
})
export class AddDashboardComponent implements OnInit{
  isEdit=false;
  userObj={
    role:'',
    reportName:'',
   pwb:'',
    // password:'',
    id:''
  }
  allUser: object;
  constructor(private commonService:CommonService,private router: Router ) { }

  ngOnInit(): void {
    this.getlatestuser1();
  }
  createRole(myform)
  {
    console.log(myform);
    this.commonService.createUser1(myform).subscribe((response)=>{
      this.getlatestuser1();
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

}

