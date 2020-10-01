import { Component, OnInit } from '@angular/core';
import {CommonService} from '../service/common.service';
import { Router,ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  isEdit=false;
  
  data:any;
  date = new Date().toLocaleString();
userObj:any;
  allUser: any;
  allUser2;
  userDetails;
  xcel_data:any[]=[];
   
  constructor(private commonService:CommonService,private router: Router,private act_router:ActivatedRoute ) { }
  allUser4:string;
  ngOnInit(): void {
    this.getlatestuser();
    this.getlatestuser2();
    console.log("user-name:",this.allUser4)
    this.userObj={
 
      roleName:'',
      listName:'',
     isAdmin:'no',
      // password:'',
      id:'',
      isActive:'yes',
      createdBy:this.allUser4,
      Timestamp:this.date,
      modifiedBy:this.allUser4,
      modifiedOn:this.date,
      
    }
  }
  onFileChange(evt:any)
  {
    
  const target : DataTransfer =<DataTransfer>(evt.target) ;
  if(target.files.length !==1) throw new Error('Cannot use multiple files');
  const reader : FileReader =new FileReader();
  reader.onload =(e:any) =>{
  const bstr:string =e.target.result;
  const wb:XLSX.WorkBook = XLSX.read(bstr, {type:'binary'});
  const wsname:string=wb.SheetNames[0];
  const ws:XLSX.WorkSheet=wb.Sheets[wsname];
  console.log(ws);
   this.allUser=(XLSX.utils.sheet_to_json(ws));
 
  console.log(this.allUser);
  this.data=this.allUser;
for(let x of this.allUser)
{
  console.log(x);
  this.commonService.createUser(x).subscribe((response)=>{
    this.getlatestuser();
    alert("Data added Succesfully!!!")
    this.router.navigate(["/admin/SRG/"+this.allUser4]);
  },
  error=>alert("The Role "+x.Rolename+"'s Id has duplicate value please check!!")
  )
}
 
console.log( 'hai this is',this.allUser);


  };
  reader.readAsBinaryString(target.files[0]);
  }
  createRole(myform)
  {
    console.log(myform);
    this.getlatestuser();
this.commonService.getAllUser().subscribe((response)=>{
  
  console.log(response);
  this.userDetails=response;
  let flag=false;
  console.log("hello this",this.userDetails)
  for(let user of this.userDetails)
  {
    console.log( "userdetails:",user)
    if(user.Rolename==this.userObj.roleName)
    {
      alert("Role is already present!!!")
      flag=true;
    }
  }
  if(flag==false){
  this.commonService.createUser(myform).subscribe((response)=>{
    this.getlatestuser();
    alert("Data added Succesfully!!!")
    this.router.navigate(["/admin/SRG/"+this.allUser4]);
  })
}

})

  
  }
  getlatestuser()
{
  this.commonService.getAllUser().subscribe((response)=>{
    this.allUser=response
  });
}
getlatestuser2()
{
  console.log("callingsajfsaf..");
  // this.allUser2=this.act_router.snapshot.paramMap.get('id');
  console.log('helo this is id',this.allUser2)
 
  this.allUser4=this.act_router.snapshot.paramMap.get('user');
  console.log('helo this is user',this.allUser4)
  // this.commonService.getAllUser2().subscribe((response)=>{
  //   this.allUser2=response
  
  // });

}
}
