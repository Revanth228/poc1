import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../service/common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
allUser4;

date=new Date().toLocaleString();
  createUser=new FormGroup({
    name:new FormControl(''),
    password:new FormControl(''),
   role:new FormControl(''),
   isActive:new FormControl(''),
    id:new FormControl(''),
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
    this.commonService.getCurrentData2(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result)
     this.createUser=new FormGroup({
      name:new FormControl(result['name']),
      password:new FormControl(result['password']),
       role:new FormControl(result['role']),
        id:new FormControl(result['id']),
        isActive:new FormControl(result['isActive']),
        createdBy:new FormControl(result['createdBy']),
        Timestamp:new FormControl(result['Timestamp']),
        ModifiedBy:new FormControl(this.allUser4),
        ModifiedOn:new FormControl(this.date)
      })
    })
  }
  updateUser()
  {
    this.commonService.updateUser2(this.router.snapshot.params.id,this.createUser.value).subscribe((result)=>{
      console.log(result,"data updated succesfully");
    })
    alert("updated succesfully");
    this.createUser.reset({});
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
