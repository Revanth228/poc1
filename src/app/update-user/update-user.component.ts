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

  createUser=new FormGroup({
    name:new FormControl(''),
    password:new FormControl(''),
   role:new FormControl(''),
    // password:'',
    id:new FormControl('')
  })
  allUser: object;
  constructor(private commonService:CommonService,private router: ActivatedRoute,private router1:Router ) { }


  ngOnInit(): void {
    this.getlatestuser();
    console.log(this.router.snapshot.params.id)
    this.commonService.getCurrentData2(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result)
     this.createUser=new FormGroup({
      name:new FormControl(result['name']),
      password:new FormControl(result['password']),
       role:new FormControl(result['role']),
        // password:'',
        id:new FormControl(result['id'])
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
    this.router1.navigateByUrl("/admin");

  }
  getlatestuser()
  {
    this.commonService.getAllUser().subscribe((response)=>{
      this.allUser=response
    });
  }
}
