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
  
  userObj=new FormGroup({
    role:new FormControl(''),
    reportName:new FormControl(''),
   pwb:new FormControl(''),
    // password:'',
    id:new FormControl('')
  })
  allUser: object;
  constructor(private commonService:CommonService,private router: ActivatedRoute,private router1:Router ) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.commonService.getCurrentData1(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result)
     this.userObj=new FormGroup({
      role:new FormControl(result['role']),
      reportName:new FormControl(result['reportName']),
       pwb:new FormControl(result['pwb']),
        // password:'',
        id:new FormControl(result['id'])
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

  }
//   createRole(myform)
//   {
//     console.log(myform);
//     this.commonService.createUser(myform).subscribe((response)=>{
//       this.getlatestuser();
//       alert("Data added Succesfully!!!")
//       // this.router.navigate(['/admin']);
//     })

//   }
//   getlatestuser()
// {
//   this.commonService.getAllUser().subscribe((response)=>{
//     this.allUser=response
//   });
// }

}