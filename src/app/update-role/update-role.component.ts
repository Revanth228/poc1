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
  date=new Date().toLocaleString();
  allUser4: any;
 
  allUser: object;
  allUser3: any;
  userObj:any;
  
  constructor(private commonService:CommonService,private router: ActivatedRoute,private router1:Router ) { }

  ngOnInit(): void {

    this.test();
   this. userObj=new FormGroup({
      Rolename:new FormControl(''),
      listName:new FormControl(''),
     isAdmin:new FormControl(''),
     isActive:new FormControl(''),
      id:new FormControl(''),
      createdBy:new FormControl(''),
      Timestamp:new FormControl(''),
      ModifiedBy: new FormControl(this.allUser4),
      ModifiedOn:new FormControl(this.date)
    })
    console.log(this.router.snapshot.params.id)
    this.commonService.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result)
     this.userObj=new FormGroup({
      Rolename:new FormControl(result['Rolename']),
        listName:new FormControl(result['listName']),
       isAdmin:new FormControl(result['isAdmin']),
       isActive:new FormControl(result['IsActive']),
        id:new FormControl(result['id']),
        createdBy:new FormControl(result['createdBy']),
        Timestamp:new FormControl(result['Timestamp']),
        ModifiedBy:new FormControl(this.allUser4),
        ModifiedOn:new FormControl(this.date)
      })
    })
  }
  updateRole()
  {
    
    this.commonService.updateUser(this.router.snapshot.params.id,this.userObj.value).subscribe((result)=>{
      console.log(result,"data updated succesfully");
    })
    alert("updated succesfully");
    this.router1.navigate(["/admin/SRG/"+this.allUser4]);
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
test()
{
  this.allUser3=this.router.snapshot.paramMap.get('id');
         this.allUser4=this.router.snapshot.paramMap.get('user');
}

}

