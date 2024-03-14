import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public editData: any

  constructor(private http: HttpClient) { }
  // for getting data from user in api
  getData(dt: any) {
    return this.http.post('http://localhost:3000/data', dt)
  }
  // for displyaing data to the user
  display() {
    return this.http.get('http://localhost:3000/data')
  }
  // Delete specific data 
  delete(id: any) {
    return this.http.delete('http://localhost:3000/data/' + id)
  }
  // to update the Data 
  update(id: any, dt: any) {
    return this.http.put('http://localhost:3000/data/' + id, dt)
  }
}
