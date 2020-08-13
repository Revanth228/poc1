import { Component, OnInit } from '@angular/core';
import {CommonService} from '../service/common.service';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {
  
  userObj=new FormGroup({
    Rolename:new FormControl(''),
    listName:new FormControl(''),
   isAdmin:new FormControl(''),
    // password:'',
    id:new FormControl('')
  })
  allUser: object;
  constructor(private commonService:CommonService,private router: ActivatedRoute,private router1:Router ) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.commonService.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result)
     this.userObj=new FormGroup({
      Rolename:new FormControl(result['Rolename']),
        listName:new FormControl(result['listName']),
       isAdmin:new FormControl(result['isAdmin']),
        // password:'',
        id:new FormControl(result['id'])
      })
    })
  }
  updateRole()
  {
    this.commonService.updateUser(this.router.snapshot.params.id,this.userObj.value).subscribe((result)=>{
      console.log(result,"data updated succesfully");
    })
    alert("updated succesfully");
    this.userObj.reset({});
    this.router1.navigateByUrl("/admin");

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

