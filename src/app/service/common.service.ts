import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
URL="http://localhost:3000/users";
URL1="http://localhost:3000/users1";
  constructor(private _http: HttpClient) { }
  createUser(user){
    return this._http.post(this.URL,user);
  }
  getAllUser(){
    return this._http.get(this.URL);
  }
  updateUser(id,data){
    return  this._http.put(`${this.URL}/${id}`,data)
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
}
