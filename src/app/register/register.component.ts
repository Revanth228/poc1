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
  }
  create()
  {
    console.log(this.createUser.value)
    this.commonService.createReg(this.createUser.value).subscribe((result)=>  
    console.log(result,"data created successfully!")
   
    )
    alert("User created successfully")
    this.router1.navigateByUrl("/admin")
  }
  getlatestuser()
  {
    this.commonService.getAllUser().subscribe((response)=>{
      this.allUser=response;
    })
  }
}
