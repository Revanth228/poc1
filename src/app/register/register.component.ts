import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../service/common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  date=new Date().toLocaleString();
  allUser4: any;
 createUser;
  allUser: object;
  userList:any;
  userDetails:any;
  constructor(private commonService:CommonService,private router: ActivatedRoute,private router1:Router ) { }


  ngOnInit(): void {
    this.test();
    this.getlatestuser();
    this.createUser=new FormGroup({
      name:new FormControl(''),
      password:new FormControl(''),
     role:new FormControl(''),
     isActive:new FormControl('yes'),
      id:new FormControl(''),
      createdBy:new FormControl(this.allUser4),
      Timestamp:new FormControl(this.date),
      ModifiedBy: new FormControl(this.allUser4),
      ModifiedOn:new FormControl(this.date)
    })
  }
  create()
  {
    console.log(this.createUser.value)
    this.getUserList();
    this.commonService.getAllUser2().subscribe((response)=>
    {
      this.userDetails=response;
      let flag=false;
      for(let user of this.userDetails)
      {
        if(user.name == this.createUser.value.name)
        {
          alert("User-Name Already Exist!!!");
          this.createUser.reset({});
          flag=true;
        }
      }
      if(flag == false)
      {
      this.commonService.createReg(this.createUser.value).subscribe((result)=>  
      console.log(result,"data created successfully!")
     
      )
      alert("User created successfully")
      this.router1.navigate(["/admin/SRG/"+this.allUser4]);
    }
    })
  
  }
  getlatestuser()
  {
    this.commonService.getAllUser().subscribe((response)=>{
      this.allUser=response;
    })
  }
  getUserList()
  {
    this.commonService.getAllUser2().subscribe((response)=>{
this.userList=response;
    })
  }
  test()
  {
    this.allUser4= this.router.snapshot.paramMap.get('user');
  }
}
