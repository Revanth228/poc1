import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
URL="http://localhost:3000/users";
URL1="http://localhost:3000/users1";
URL2="http://localhost:3000/users2"
  constructor(private _http: HttpClient) { }
  createUser(user){
    
    return this._http.post(this.URL,user);
  }
  getAllUser(){
    return this._http.get(this.URL);
  }
  updateUser(id,data){
    return  this._http.put(`${this.URL}/${id}`,data);
  }
  updateIsactive(data){
    return  this._http.put(`${this.URL}`,data);
  }
  deleteUser(user){
    return  this._http.delete("http://localhost:3000/users/"+user.id)
  }
  getCurrentData(id)
  {
    return  this._http.get(`${this.URL}/${id}`)
  }
  createUser1(user){
    return this._http.post(this.URL1,user);
  }
  getAllUser1(){
    return this._http.get(this.URL1);
  }
  updateUser1(id,data){
    return  this._http.put(`${this.URL1}/${id}`,data)
  }
  deleteUser1(user){
    return  this._http.delete("http://localhost:3000/users1/"+user.id)
  }
  getCurrentData1(id)
  {
    return  this._http.get(`${this.URL1}/${id}`)
  }
  createReg(data)
  {
  return this._http.post(this.URL2,data);
   }
   deleteUser2(user){
    return  this._http.delete("http://localhost:3000/users2/"+user.id)
  }
   getAllUser2(){
    return this._http.get(this.URL2);
  }
  updateUser2(id,data){
    return  this._http.put(`${this.URL2}/${id}`,data)
  }
  
  getCurrentData2(id)
  {
    return  this._http.get(`${this.URL2}/${id}`)
  }
}
