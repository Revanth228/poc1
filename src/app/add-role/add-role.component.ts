import { Component, OnInit } from '@angular/core';
import {CommonService} from '../service/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  isEdit=false;
  userObj={
    roleName:'',
    listName:'',
   isAdmin:'',
    // password:'',
    id:''
  }
  allUser: object;
  constructor(private commonService:CommonService,private router: Router ) { }

  ngOnInit(): void {
    this.getlatestuser();
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

}
