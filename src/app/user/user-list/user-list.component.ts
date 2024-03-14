import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  public data: any

  constructor(private api: DataService, private rout: Router) {
    this.displayData()
  }

  // for display the record data
  displayData() {
    this.api.display().subscribe((res: any) => {
      this.data = res
    })
  }

  edit(dt: any) {
    this.api.editData = dt;
    this.rout.navigate([''])
    console.log(this.api.editData)
  }

  // for delete record in list
  ondelete(dt: any) {
    console.log(dt.id)
    this.api.delete(dt.id).subscribe((res: any) => {
      console.log(res.id);
      this.displayData()
    })
  }

}
